const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/utility',
  assetPrefix: '/utility',
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
