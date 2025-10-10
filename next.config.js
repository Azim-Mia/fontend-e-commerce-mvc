/** @type {import('next').NextConfig} */
const nextConfig = {
  // এখানে আর কিছু লাগবে না
  images: {
    unoptimized: true, // sharp বাদ দেবে
  },
typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig;
