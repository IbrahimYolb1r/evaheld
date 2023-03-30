/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
};

module.exports = nextConfig;
