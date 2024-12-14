/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      punycode: false,
      "date-fns-tz": false
    };
    return config
  }
};

export default nextConfig;
