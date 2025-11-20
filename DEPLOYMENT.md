# GitHub Pages Deployment Guide

This repository is configured for automatic deployment to GitHub Pages.

## Repository Information

- **Repository Name:** `tscc-constructive-portfolio-e69c9832`
- **GitHub Username:** `Anuj359`
- **Live URL:** `https://anuj359.github.io/tscc-constructive-portfolio-e69c9832/`

## Automatic Deployment

The site will automatically deploy when you push changes to the `main` branch. The GitHub Actions workflow will:

1. Build the React application
2. Deploy the built files to GitHub Pages
3. Make the site available at the URL above

## Initial Setup (One-time)

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Push the workflow file:**
   - The `.github/workflows/deploy.yml` file is already created
   - Commit and push to trigger the first deployment:
     ```bash
     git add .github/workflows/deploy.yml
     git commit -m "Add GitHub Pages deployment workflow"
     git push origin main
     ```

3. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - Wait for the workflow to complete (usually 2-3 minutes)
   - Your site will be live at the URL above

## Manual Deployment

If you need to deploy manually:

1. **Build the project:**
   ```bash
   npm run build:gh-pages
   ```

2. **The build output will be in the `dist` folder**

## Important Notes

- The site uses client-side routing, so all routes will work correctly
- The base URL is set to `/tscc-constructive-portfolio-e69c9832/` for GitHub Pages
- A `404.html` file is included to handle client-side routing
- The site will be available at: `https://anuj359.github.io/tscc-constructive-portfolio-e69c9832/`

## Troubleshooting

If the site doesn't load correctly:

1. **Check GitHub Pages is enabled:**
   - Go to Settings → Pages
   - Ensure "GitHub Actions" is selected as the source

2. **Verify the workflow completed:**
   - Go to the Actions tab
   - Check if the workflow ran successfully
   - Look for any error messages

3. **Check the base URL:**
   - Ensure `vite.config.ts` has the correct base path
   - It should match your repository name: `/tscc-constructive-portfolio-e69c9832/`

4. **Clear browser cache:**
   - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - Or clear browser cache

5. **Check the 404.html file:**
   - Ensure `public/404.html` exists
   - It should have the SPA redirect script

## Local Development

To run locally:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:8080`

## Updating the Site

After making changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically:
   - Build the site
   - Deploy to GitHub Pages
   - Your changes will be live in 2-3 minutes
