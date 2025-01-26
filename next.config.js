/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: ['postcss-loader'],
  //   })
  //   return config
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;