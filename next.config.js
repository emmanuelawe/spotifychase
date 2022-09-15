/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
}

module.exports = {
  images: {
    domains: ['media.discordapp.net', 'getheavy.com'],
  },
}
