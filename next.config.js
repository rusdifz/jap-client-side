/** @type {import('next').NextConfig} */

const nextConfig = {
  //    webpack(config) {
  //         config.module.rules.push({
  //           test: /\.svg$/,
  //         //   use: ["@svgr/webpack"],
  //         });
  //         return config;
  //     },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jardineasiapasific.asia',
        pathname: '/wp-content/uploads/**',
        port: '',
      },
    ],
  },
  experimental: {
    urlImports: [
      'https://jardineasiapasific.asia/wp-content/uploads',
      'https://jardineasiapasific.asia/wp-content/uploads/*',
    ],
  },
};

module.exports = nextConfig;
