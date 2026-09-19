'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Loader2,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { cn, withBasePath } from '@/lib/utils'

const MIN_ZOOM = 0.5
const MAX_ZOOM = 3
const ZOOM_STEP = 0.25
const SWIPE_THRESHOLD = 50

/**
 * Custom report reader built on pdf.js, rendering pages to <canvas> instead
 * of embedding the browser's native PDF plugin. The native viewer shows its
 * own toolbar with the PDF's internal (often mis-encoded) title, doesn't
 * size well on mobile, and reads as "just an embedded file" rather than a
 * designed reading experience — this replaces all of that with our own UI,
 * plus zoom, fullscreen, keyboard, and swipe navigation.
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
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const docRef = useRef<import('pdfjs-dist').PDFDocumentProxy | null>(null)
  const loadingTaskRef = useRef<import('pdfjs-dist').PDFDocumentLoadingTask | null>(null)
  const renderTaskRef = useRef<{ cancel: () => void } | null>(null)
  const touchStartXRef = useRef<number | null>(null)

  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [numPages, setNumPages] = useState(0)
  const [pageNum, setPageNum] = useState(1)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [zoom, setZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

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

  // Track the container's size so pages render sharp, and fit fullscreen by height too.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect
      if (rect) setContainerSize({ width: rect.width, height: rect.height })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Track fullscreen state (the browser, not just our button, can exit it — e.g. Esc).
  useEffect(() => {
    const handler = () => setIsFullscreen(document.fullscreenElement === wrapperRef.current)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  // Keyboard shortcuts, active while the viewer (or fullscreen) has focus.
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (status !== 'ready') return
      const withinViewer = wrapperRef.current?.contains(document.activeElement)
      if (!isFullscreen && !withinViewer) return
      if (e.key === 'ArrowLeft') setPageNum((p) => Math.max(1, p - 1))
      else if (e.key === 'ArrowRight') setPageNum((p) => Math.min(numPages, p + 1))
      else if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)))
      else if (e.key === '-') setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)))
      else if (e.key === '0') setZoom(1)
      else return
      e.preventDefault()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [status, numPages, isFullscreen])

  // Render the current page whenever the doc, page, size, or zoom changes.
  useEffect(() => {
    if (status !== 'ready' || !docRef.current || !canvasRef.current || containerSize.width === 0) return
    let cancelled = false
    ;(async () => {
      const page = await docRef.current!.getPage(pageNum)
      if (cancelled) return
      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
      const base = page.getViewport({ scale: 1 })
      const fitWidthScale = containerSize.width / base.width
      const fitHeightScale = containerSize.height > 0 ? containerSize.height / base.height : Infinity
      const fitScale = isFullscreen ? Math.min(fitWidthScale, fitHeightScale) : fitWidthScale
      const targetScale = fitScale * zoom
      const viewport = page.getViewport({ scale: targetScale * dpr })
      const canvas = canvasRef.current!
      canvas.width = viewport.width
      canvas.height = viewport.height
      canvas.style.width = `${targetScale * base.width}px`
      canvas.style.height = `${targetScale * base.height}px`
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
  }, [status, pageNum, containerSize, zoom, isFullscreen])

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      wrapperRef.current?.requestFullscreen()
    }
  }

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)))
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)))
  const resetZoom = () => setZoom(1)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = zoom > 1 ? null : (e.touches[0]?.clientX ?? null)
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartXRef.current
    touchStartXRef.current = null
    if (startX === null) return
    const dx = (e.changedTouches[0]?.clientX ?? startX) - startX
    if (dx > SWIPE_THRESHOLD) setPageNum((p) => Math.max(1, p - 1))
    else if (dx < -SWIPE_THRESHOLD) setPageNum((p) => Math.min(numPages, p + 1))
  }

  return (
    <div
      ref={wrapperRef}
      className={cn(
        'mx-auto w-full overflow-hidden rounded-2xl border border-border bg-white shadow-lg',
        isFullscreen ? 'flex h-full max-w-none flex-col' : 'max-w-xl',
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border bg-surface px-5 py-3">
        <p className="truncate text-sm font-bold text-foreground">{label}</p>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? '全画面表示を終了' : '全画面で表示'}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-pale-blue hover:text-fsif-blue"
        >
          {isFullscreen ? <Minimize2 className="size-4" aria-hidden /> : <Maximize2 className="size-4" aria-hidden />}
        </button>
      </div>

      <div
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={cn(
          'relative flex items-center justify-center overflow-auto bg-pale-blue/30 p-4',
          isFullscreen ? 'flex-1' : 'min-h-[320px]',
        )}
      >
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

      {status === 'ready' && (
        <div className="shrink-0 border-t border-border bg-surface">
          {numPages > 1 && (
            <div className="flex items-center justify-center gap-2 px-4 py-3">
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
          <div
            className={cn(
              'flex items-center justify-center gap-3 px-4 py-2.5',
              numPages > 1 && 'border-t border-border',
            )}
          >
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              aria-label="縮小"
              className="inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-fsif-blue hover:text-fsif-blue disabled:pointer-events-none disabled:opacity-30"
            >
              <ZoomOut className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={resetZoom}
              aria-label="拡大率をリセット"
              className="min-w-[3.5rem] text-center font-mono text-xs text-muted-foreground transition-colors hover:text-fsif-blue"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              type="button"
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              aria-label="拡大"
              className="inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-fsif-blue hover:text-fsif-blue disabled:pointer-events-none disabled:opacity-30"
            >
              <ZoomIn className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
