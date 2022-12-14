/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["source.unsplash.com", "cdn.pixabay.com"]
    },
}

module.exports = nextConfig
