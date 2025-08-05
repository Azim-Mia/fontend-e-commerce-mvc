/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  // ❌ IMPORTANT: Don't use `output: 'export'`
};

export default nextConfig;
