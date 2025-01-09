// Check if the project is being built on GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// Extract the repository name for proper GitHub Pages handling
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio';

// Define assetPrefix and basePath for proper static export configuration
const assetPrefix = isGithubActions ? `/${repoName}/` : '';
const basePath = isGithubActions ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */


const nextConfig = {
  output: 'export',
  distDir: 'out', // Ensure static files are output here
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

