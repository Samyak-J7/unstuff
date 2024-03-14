/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "hidden-aardvark-580.convex.cloud",
        },
      ],
    },
  };
  
  export default nextConfig;