// GitHub Pages serves the site from https://<org>.github.io/<repo>/, so the
// build needs a basePath/assetPrefix matching the repository name. This is
// only applied in GitHub Actions (via GITHUB_REPOSITORY) so local dev/build
// keeps working at the site root.
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
let basePath = ''
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*\//, '')
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Static export has no /_next/image endpoint, and Next's built-in
  // "unoptimized" image handling doesn't apply basePath to <img> src/srcset.
  // A custom loader (lib/image-loader.js) prepends basePath manually instead.
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.js',
  },
  // Static export for GitHub Pages: there is no Node server, so
  // next.config.mjs redirects/rewrites/headers cannot run and were removed.
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
