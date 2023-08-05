/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                hostname: 'media.graphassets.com',
                protocol: 'https'
            }
        ]
    }
}

module.exports = nextConfig
