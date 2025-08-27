/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jaliyadda-somalida-istanbul.onrender.com",
        port: "",
        pathname: "/uploads/**", // allows all images under /uploads
      },
    ],
  },
};

module.exports = nextConfig;
