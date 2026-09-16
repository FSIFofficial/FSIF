// Matches either a markdown-style [label](url) link or a bare http(s) URL.
const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|https?:\/\/[^\s。、，,)）」』】]+/g

const linkClass = 'break-all text-fsif-blue underline underline-offset-2 hover:text-[#0057c4]'

/**
 * Renders plain text with links turned clickable. Supports bare URLs
 * (linked as-is) and markdown-style `[label](url)` for custom link text,
 * e.g. an `@handle` that should point to a different profile URL.
 */
export function Linkify({ text }: { text: string }) {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    const [full, label, mdHref] = match
    const href = mdHref ?? full
    nodes.push(
      <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {label ?? full}
      </a>,
    )
    lastIndex = match.index + full.length
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))

  return <>{nodes}</>
}
