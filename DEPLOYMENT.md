# GitHub Pages Deployment Guide

This repository is configured for automatic deployment to GitHub Pages.

## Automatic Deployment

The site will automatically deploy when you push changes to the `main` branch. The GitHub Actions workflow will:

1. Build the React application
2. Deploy the built files to GitHub Pages
3. Make the site available at: `https://yourusername.github.io/tscc-constructive-portfolio/`

## Manual Deployment

If you need to deploy manually:

1. **Build the project:**
   ```bash
   npm run build:gh-pages
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to main

## Important Notes

- The site uses client-side routing, so all routes will work correctly
- The base URL is set to `/tscc-constructive-portfolio/` for GitHub Pages
- A 404.html file is included to handle client-side routing
- The site will be available at: `https://yourusername.github.io/tscc-constructive-portfolio/`

## Troubleshooting

If the site doesn't load correctly:

1. Check that GitHub Pages is enabled in repository settings
2. Verify the workflow completed successfully in the Actions tab
3. Ensure the base URL matches your repository name
4. Check that all assets are loading correctly

## Local Development

To run locally:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:8080`
