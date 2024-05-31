/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/gh-pages' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gh-pages' : '',
  output: process.env.NODE_ENV === 'production' ? "export": '',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    loader: 'akamai',
    path: '',
  },
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/gh-pages' : '',
  },
};

module.exports = nextConfig;