/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/gh-pages' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gh-pages' : '',
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/gh-pages' : '',
  },
};

module.exports = nextConfig;

  