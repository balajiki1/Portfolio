const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio';
const assetPrefix = isGithubActions ? `/${repoName}/` : '';
const basePath = isGithubActions ? `/${repoName}` : '';

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
