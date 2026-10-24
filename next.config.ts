import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // jsdom e l'Admin SDK girano solo sul server e non vanno impacchettati: li carica Node.
  serverExternalPackages: ['jsdom', 'firebase-admin'],
};

export default nextConfig;
