# GitHub Pages Setup - Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/Anuj359/tscc-constructive-portfolio-e69c9832`
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
5. Click **Save**

### Step 2: Push the Workflow
The GitHub Actions workflow file is already created at `.github/workflows/deploy.yml`. Just commit and push:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Step 3: Wait for Deployment
1. Go to the **Actions** tab in your repository
2. You'll see a workflow run called "Deploy to GitHub Pages"
3. Wait 2-3 minutes for it to complete
4. Once it shows a green checkmark ✅, your site is live!

### Step 4: Access Your Site
Your site will be available at:
**https://anuj359.github.io/tscc-constructive-portfolio-e69c9832/**

---

## 📝 What Was Configured

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically builds and deploys on every push to `main`
   - Uses the latest GitHub Pages deployment actions

✅ **Vite Configuration** (`vite.config.ts`)
   - Base path set to `/tscc-constructive-portfolio-e69c9832/`
   - Production builds configured correctly

✅ **React Router** (`src/App.tsx`)
   - BrowserRouter configured with correct basename
   - All routes will work correctly on GitHub Pages

✅ **404.html** (`public/404.html`)
   - Handles client-side routing for GitHub Pages
   - Redirects all routes to the React app

---

## 🔄 Updating Your Site

After making any changes:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

The site will automatically rebuild and redeploy in 2-3 minutes!

---

## 🐛 Troubleshooting

### Site shows 404
- Check that GitHub Pages is enabled (Settings → Pages)
- Verify the source is set to "GitHub Actions"
- Wait a few minutes after pushing - deployment takes time

### Routes don't work
- Ensure `public/404.html` exists (it does!)
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R)

### Build fails
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Try running `npm run build:gh-pages` locally to test

### Assets not loading
- Check that `vite.config.ts` has the correct base path
- Verify the repository name matches the base path
- Clear browser cache

---

## 📧 Need Help?

If you encounter issues:
1. Check the Actions tab for error logs
2. Verify all files are committed and pushed
3. Ensure GitHub Pages is enabled in repository settings

---

## ✨ That's It!

Your site is now configured for automatic deployment. Every time you push to `main`, it will automatically deploy to GitHub Pages!

