/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org'],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      }
};

export default nextConfig;
