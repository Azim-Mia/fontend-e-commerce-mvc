"use strict";
// next.config.ts
Object.defineProperty(exports, "__esModule", { value: true });
var nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    experimental: {
        serverActions: {}, // খালি object দিয়ে ট্রাই করতে পারো
    },
};
nextConfig; // এটা ফাইলের বাইরে থাকতে হবে, object এর ভিতরে নয়
