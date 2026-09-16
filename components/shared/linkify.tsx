const URL_RE = /https?:\/\/[^\s。、，,)）」』】]+/g

/** Renders plain text with any http(s) URLs turned into clickable links. */
export function Linkify({ text }: { text: string }) {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = URL_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    const url = match[0]
    nodes.push(
      <a
        key={key++}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all text-fsif-blue underline underline-offset-2 hover:text-[#0057c4]"
      >
        {url}
      </a>,
    )
    lastIndex = match.index + url.length
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))

  return <>{nodes}</>
}
