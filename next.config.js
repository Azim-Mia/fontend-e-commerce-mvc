/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // disables sharp optimization
  },
  webpack: (config) => {
    config.cache = false; // optional for termux stability
    return config;
  },
};

module.exports = nextConfig;
