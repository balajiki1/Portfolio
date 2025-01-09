// Check if the project is being built on GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// Extract the repository name for proper GitHub Pages handling
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio';

// Define assetPrefix and basePath for proper static export configuration
const assetPrefix = isGithubActions ? `/${repoName}/` : '';
const basePath = isGithubActions ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures static export
  images: {
    unoptimized: true, // Disable image optimization
  },
  trailingSlash: true, // Ensures routes end with a slash
};

module.exports = nextConfig;
