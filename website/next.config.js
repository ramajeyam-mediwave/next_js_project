/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: '/temp-staging-url',
  basePath: '/',
  assetPrefix: '/',
  output: "export",
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
