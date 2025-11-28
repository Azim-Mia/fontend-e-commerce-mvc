/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,     // সব image optimize বন্ধ
  },
  experimental: {
    images: {
      allowFutureImage: true,
    }
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
