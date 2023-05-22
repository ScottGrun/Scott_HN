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
    }
}

module.exports = nextConfig
