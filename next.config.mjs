/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old PROJECTS section -> PRODUCT / community
      { source: '/projects', destination: '/product', permanent: true },
      { source: '/projects/orbit', destination: '/product/orbit', permanent: true },
      {
        source: '/projects/cosmobase',
        destination: '/activities/community/cosmobase',
        permanent: true,
      },
      {
        source: '/projects/cosmobase/partners',
        destination: '/activities/community/cosmobase/partners',
        permanent: true,
      },
      // Retired "development" activity -> PRODUCT
      { source: '/activities/development', destination: '/product', permanent: true },
      // Symposium canonical route (single 2024 record)
      {
        source: '/events/space-business-symposium',
        destination: '/activities/event/space-business-symposium-2024',
        permanent: true,
      },
      // Old /events index folded into the event activity page
      { source: '/events', destination: '/activities/event', permanent: true },
    ]
  },
}

export default nextConfig
