/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      // test: /\.svg$/,
      // use: ['@svgr/webpack'],
    });
    // config.plugins.push(
    //   new webpack.IgnorePlugin({
    //     resourceRegExp: /examples/,
    //   }),
    // );
    // // Tambahkan rule untuk file SVG
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   issuer: {
    //     and: [/\.(js|ts)x?$/], // Hanya memproses file yang diimport di file JavaScript/TypeScript
    //   },
    //   use: [
    //     {
    //       loader: '@svgr/webpack',
    //       options: {
    //         // Opsi tambahan jika diperlukan
    //       },
    //     },
    //   ],
    // });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jardineasiapasific.asia',
        pathname: '/wp-content/uploads/**',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/api/media/image/**',
        port: '3000',
      },
    ],
  },
  experimental: {
    urlImports: [
      'https://jardineasiapasific.asia/wp-content/uploads',
      'https://jardineasiapasific.asia/wp-content/uploads/*',
      'http://localhost:3000/api/media/image/*',
    ],
  },
};

module.exports = nextConfig;
