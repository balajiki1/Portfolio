const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// Extract the repository name for proper GitHub Pages handling
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio';

// Define assetPrefix and basePath for proper static export configuration
const assetPrefix = isGithubActions ? `/${repoName}/` : '';
const basePath = isGithubActions ? `/${repoName}` : '';

module.exports = {
  // Configure asset prefix and base path for GitHub Pages
  assetPrefix,
  basePath,

  // Ensure static files are exported
  output: 'export',

  // Disable image optimization since GitHub Pages doesn't support dynamic image processing
  images: {
    unoptimized: true,
  },

  // Add trailing slashes to routes for better static compatibility
  trailingSlash: true,

  // Optional: Enable React strict mode (useful for debugging in development)
  reactStrictMode: true,

  // Optional: Enable swcMinify for faster builds and optimized performance
  swcMinify: true,
};
