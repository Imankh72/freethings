/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freethings.app",
      },
    ],
  },
  redirects: async () => {
    return [
      { source: "/product-details", destination: "/", permanent: true },
      { source: "/profile", destination: "/", permanent: true },
      { source: "/products", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
