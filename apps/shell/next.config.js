const { NEXT_PUBLIC_CONFIGS_URL } = process.env;

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/configs",
        destination: `${NEXT_PUBLIC_CONFIGS_URL}/configs`,
      },
      {
        source: "/configs/:path*",
        destination: `${NEXT_PUBLIC_CONFIGS_URL}/configs/:path*`,
      },
    ];
  },
};
