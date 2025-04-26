/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.ignoreWarnings = [{ module: /antd/ }, { module: /rc-util/ }];
    return config;
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '4mb',
      allowedOrigins: ['localhost:3000', 'api-jap.vercel.com'],
    },
  },
};

module.exports = nextConfig;
