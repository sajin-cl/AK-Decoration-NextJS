/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  /* USE THIS ONLY IN DEV MODE FOR MOBILE RESPOSIVE CHECK::: allowedDevOrigins: ['10.166.17.56'],
  */

  images: {
    qualities: [50, 65, 75],

    formats: ["image/webp", "image/avif"],

    deviceSizes: [320, 640, 768, 1024, 1280, 1536,],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384,],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;