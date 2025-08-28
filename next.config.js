/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jaliyadda-somalida-istanbul.onrender.com",
        pathname: "/uploads/**", // Strapi local uploads
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // allow all Cloudinary images
      },
    ],
  },
};

module.exports = nextConfig;
