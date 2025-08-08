// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},  // খালি object দিয়ে ট্রাই করতে পারো
  },
};

export nextConfig;  // এটা ফাইলের বাইরে থাকতে হবে, object এর ভিতরে নয়
