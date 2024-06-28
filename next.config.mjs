/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.FIREBASE_IMAGE_HOSTNAME,
        pathname: process.env.FIREBASE_IMAGE_PATHNAME,
      },
    ],
  },
};

export default nextConfig;
