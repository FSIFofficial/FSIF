'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Download, Loader2 } from 'lucide-react'
import { withBasePath } from '@/lib/utils'

/**
 * Custom report reader built on pdf.js, rendering pages to <canvas> instead
 * of embedding the browser's native PDF plugin. The native viewer shows its
 * own toolbar with the PDF's internal (often mis-encoded) title, doesn't
 * size well on mobile, and reads as "just an embedded file" rather than a
 * designed reading experience — this replaces all of that with our own UI.
 */
export function PdfViewer({
  src,
  label,
  downloadName,
}: {
  src: string
  label: string
  downloadName: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const docRef = useRef<import('pdfjs-dist').PDFDocumentProxy | null>(null)
  const loadingTaskRef = useRef<import('pdfjs-dist').PDFDocumentLoadingTask | null>(null)
  const renderTaskRef = useRef<{ cancel: () => void } | null>(null)

  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [numPages, setNumPages] = useState(0)
  const [pageNum, setPageNum] = useState(1)
  const [width, setWidth] = useState(0)

  const fullHref = withBasePath(src)

  // Load the document once.
  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    ;(async () => {
      try {
        const pdfjsLib = await import('pdfjs-dist')
        pdfjsLib.GlobalWorkerOptions.workerSrc = withBasePath('/pdf.worker.min.mjs')
        const loadingTask = pdfjsLib.getDocument({ url: fullHref })
        loadingTaskRef.current = loadingTask
        const doc = await loadingTask.promise
        if (cancelled) {
          loadingTask.destroy()
          return
        }
        docRef.current = doc
        setNumPages(doc.numPages)
        setPageNum(1)
        setStatus('ready')
      } catch {
        if (!cancelled) setStatus('error')
      }
    })()
    return () => {
      cancelled = true
      loadingTaskRef.current?.destroy()
      loadingTaskRef.current = null
      docRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullHref])

  // Track the container's width so pages render sharp at any screen size.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width
      if (w) setWidth(w)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Render the current page whenever the doc, page number, or width changes.
  useEffect(() => {
    if (status !== 'ready' || !docRef.current || !canvasRef.current || width === 0) return
    let cancelled = false
    ;(async () => {
      const page = await docRef.current!.getPage(pageNum)
      if (cancelled) return
      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
      const base = page.getViewport({ scale: 1 })
      const scale = width / base.width
      const viewport = page.getViewport({ scale: scale * dpr })
      const canvas = canvasRef.current!
      canvas.width = viewport.width
      canvas.height = viewport.height
      canvas.style.width = `${width}px`
      canvas.style.height = `${width * (base.height / base.width)}px`
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      renderTaskRef.current?.cancel()
      const task = page.render({ canvasContext: ctx, viewport })
      renderTaskRef.current = task
      try {
        await task.promise
      } catch {
        // A cancelled render throws; safe to ignore.
      }
    })()
    return () => {
      cancelled = true
    }
  }, [status, pageNum, width])

  return (
    <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
      <div className="border-b border-border bg-surface px-5 py-3">
        <p className="truncate text-sm font-bold text-foreground">{label}</p>
      </div>

      <div ref={containerRef} className="relative flex min-h-[320px] items-center justify-center bg-pale-blue/30 p-4">
        {status === 'loading' && (
          <div className="flex flex-col items-center gap-2 py-16 text-muted-foreground">
            <Loader2 className="size-6 animate-spin" aria-hidden />
            <p className="text-xs">読み込み中…</p>
          </div>
        )}
        {status === 'error' && (
          <div className="flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
            <p className="text-sm">プレビューを表示できませんでした。</p>
            <a
              href={fullHref}
              download={downloadName}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-fsif-blue hover:text-fsif-blue"
            >
              <Download className="size-4" />
              ダウンロード
            </a>
          </div>
        )}
        <canvas ref={canvasRef} className={status === 'ready' ? 'rounded-md shadow-sm' : 'hidden'} />
      </div>

      {status === 'ready' && numPages > 1 && (
        <div className="flex items-center justify-center gap-2 border-t border-border bg-surface px-4 py-3">
          <button
            type="button"
            onClick={() => setPageNum((p) => Math.max(1, p - 1))}
            disabled={pageNum <= 1}
            aria-label="前のページ"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-fsif-blue hover:text-fsif-blue disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <span className="min-w-[4.5rem] text-center font-mono text-xs text-muted-foreground">
            {pageNum} / {numPages}
          </span>
          <button
            type="button"
            onClick={() => setPageNum((p) => Math.min(numPages, p + 1))}
            disabled={pageNum >= numPages}
            aria-label="次のページ"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-fsif-blue hover:text-fsif-blue disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      )}
    </div>
  )
}
