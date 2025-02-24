console.log("Loading next.config.js...");
console.log("VERCEL_API_TOKEN from process.env:", process.env.VERCEL_API_TOKEN);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VERCEL_API_TOKEN: process.env.VERCEL_API_TOKEN,
    VERCEL_TEAM_ID: process.env.VERCEL_TEAM_ID,
    NEO4J_URI: process.env.NEO4J_URI,
    NEO4J_USER: process.env.NEO4J_USER,
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
    // ... other environment variables ...
  },
  // Add public runtime config for client-side access
  publicRuntimeConfig: {
    NEO4J_URI: process.env.NEO4J_URI,
    NEO4J_USER: process.env.NEO4J_USER,
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
  // Move serverComponentsExternalPackages out of experimental
  serverExternalPackages: ['next-themes'],
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  // Add Turbopack configuration
  experimental: {
    turbo: {
      resolveAlias: {
        // Add any aliases you need
      },
      rules: {
        // Add any rules you need
      },
    },
  },
  // ... rest of your config ...
};

console.log("Next.js config:", nextConfig);
export default nextConfig;