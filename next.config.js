/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/topstories',
                permanent: true,
            },
        ]
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'robohash.org',
          },
        ],
      },
}

module.exports = nextConfig
