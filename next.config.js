/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  optimizeFonts: true,
  env: {
    articleMarkdownPath: '_articles',
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
