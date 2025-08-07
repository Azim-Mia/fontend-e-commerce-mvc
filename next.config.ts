import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // ✅ Static HTML export বন্ধ করে server mode চালু করে
  experimental: {
    serverActions: true, // যদি তুমি Server Actions ব্যবহার করো
  },
};

export default nextConfig;
