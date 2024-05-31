/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/gh-pages",
    output: "export",
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
}

module.exports = nextConfig