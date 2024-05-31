/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['raw.githubusercontent.com'],
    }, 
};
  
  if (process.env.NODE_ENV === 'production') {
    nextConfig.basePath = "/gh-pages";
    nextConfig.assetPrefix = "/gh-pages/";
    nextConfig.reactStrictMode = true;
    nextConfig.output = "export";
    nextConfig.images = {
      loader: 'akamai',
      path: '',
    };
  }
  
  module.exports = nextConfig;
  