const isGithubActions = process.env.GITHUB_ACTIONS || false;

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio'; // Use the repo name
const assetPrefix = isGithubActions ? `/${repo}/` : '';
const basePath = isGithubActions ? `/${repo}` : '';

module.exports = {
  output: 'export', // Enables static export for Next.js
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
