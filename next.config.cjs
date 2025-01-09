const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio';
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

export default {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Disable Image Optimization for GitHub Pages
  },
};
