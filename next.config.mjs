/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      // This doesn't help :(
      // "@kinde-oss/kinde-auth-nextjs",
      // "@kinde-oss/kinde-typescript-sdk",
      // "drizzle-orm",
      // "@neondatabase/serverless",
    ],
  },
  // transpilePackages: ["drizzle-orm", "@neondatabase/serverless"],
};

export default nextConfig;
