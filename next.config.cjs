const isGithubActions = process.env.GITHUB_ACTIONS || false;

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio';
const assetPrefix = isGithubActions ? `/${repo}/` : '';
const basePath = isGithubActions ? `/${repo}` : '';

module.exports = {
  output: 'export', // Enables static export
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Disable image optimization
  },
  trailingSlash: true, // Ensures proper routing
};
