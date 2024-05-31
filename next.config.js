 /** @type {import('next').NextConfig} */
 const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/gh-pages' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gh-pages' : '',
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    loader: 'akamai',
    path: '',
    unoptimized: true, // Added this to disable image optimization
  },
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/gh-pages' : '',
  },
};

module.exports = nextConfig;