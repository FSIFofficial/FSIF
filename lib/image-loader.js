// Static export (output: 'export') has no /_next/image optimization
// endpoint, and Next's built-in "unoptimized" src handling doesn't apply
// basePath to plain <img> src/srcset. This loader returns the raw asset
// path with the GitHub Pages basePath (e.g. /FSIF) prepended so images
// resolve correctly when the site is served from a repo subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function imageLoader({ src }) {
  if (/^https?:\/\//.test(src)) return src
  return `${basePath}${src}`
}
