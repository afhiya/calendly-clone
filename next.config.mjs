/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { staleTimes: { dynamic: 0 } },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      punycode: false,
      "date-fns-tz": false
    };
  }
};

export default nextConfig;
