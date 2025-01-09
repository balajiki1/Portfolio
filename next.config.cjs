const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio';
const assetPrefix = isGithubActions ? `/${repoName}/` : '';
const basePath = isGithubActions ? `/${repoName}` : '';

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disables image optimization
  },
  trailingSlash: true,
};
