/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/configs",

  transpilePackages: ["@repo/ui"],
  output: "standalone",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/configs",
        basePath: false,
        permanent: false,
      },
    ];
  },
};
