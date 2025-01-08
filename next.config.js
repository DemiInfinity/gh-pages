/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  assetPrefix: "",
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
    loader: "akamai",
    path: "",
    unoptimized: true, // Added this to disable image optimization
  },
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === "production" ? "/gh-pages" : "",
  },
};

module.exports = nextConfig;
