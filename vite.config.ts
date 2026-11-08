import { defineConfig } from 'vite';

// Supports project sites on GitHub Pages and a root URL during local development.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
export default defineConfig({
  base: repositoryName ? `/${repositoryName}/` : '/',
});
