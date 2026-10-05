/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.js',
  },
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
}

export default nextConfig
