# Custom Domain Setup for tscc.co.in

## ✅ Configuration Complete

Your site is now configured to work with both:
- **Custom Domain:** https://tscc.co.in (uses root path `/`)
- **GitHub Pages Subdomain:** https://anuj359.github.io/tscc-constructive-portfolio-e69c9832/ (uses repo path)

## 🔧 What Was Changed

1. **vite.config.ts**
   - Base path set to `/` for production builds
   - Works with custom domain (serves from root)

2. **src/App.tsx**
   - Smart base path detection:
     - Detects if on `tscc.co.in` → uses `/`
     - Detects if on `github.io` → uses `/tscc-constructive-portfolio-e69c9832/`
     - Defaults to `/` for any other domain

## 📋 GitHub Pages Custom Domain Setup

### Step 1: Configure DNS
Make sure your DNS is configured correctly:

**Option A: Apex Domain (tscc.co.in)**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**Option B: CNAME (www.tscc.co.in)**
```
Type: CNAME
Name: www
Value: anuj359.github.io
```

### Step 2: Add Custom Domain in GitHub
1. Go to your repository: https://github.com/Anuj359/tscc-constructive-portfolio-e69c9832/settings/pages
2. Under "Custom domain", enter: `tscc.co.in`
3. Check "Enforce HTTPS" (recommended)
4. Click "Save"

### Step 3: Wait for DNS Propagation
- DNS changes can take 24-48 hours to propagate
- You can check DNS propagation at: https://www.whatsmydns.net/

### Step 4: Verify SSL Certificate
- GitHub automatically provisions SSL certificates for custom domains
- This usually takes a few minutes after adding the domain
- Check status in repository Settings → Pages

## 🚀 Deploy the Changes

After making these changes, deploy:

```bash
git add .
git commit -m "Configure for custom domain tscc.co.in"
git push origin main
```

Wait 2-3 minutes for the GitHub Actions workflow to complete.

## ✅ Verify It's Working

1. **Check the site loads:**
   - Visit: https://tscc.co.in
   - All pages should load correctly

2. **Check routes work:**
   - https://tscc.co.in/about
   - https://tscc.co.in/services
   - https://tscc.co.in/projects
   - https://tscc.co.in/contact
   - https://tscc.co.in/calculator

3. **Check assets load:**
   - Images, CSS, and JavaScript should all load
   - Check browser console for any 404 errors

## 🐛 Troubleshooting

### Site shows blank page
- **Clear browser cache:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- **Check DNS:** Verify DNS is pointing to GitHub Pages IPs
- **Wait for propagation:** DNS changes can take time

### Routes return 404
- **Check 404.html:** Ensure `public/404.html` exists (it does!)
- **Verify base path:** The app should auto-detect, but check browser console
- **Check GitHub Pages settings:** Ensure custom domain is saved

### Assets not loading
- **Check base path:** Should be `/` for custom domain
- **Verify build:** Check Actions tab to ensure build succeeded
- **Clear CDN cache:** If using a CDN, clear its cache

### SSL Certificate issues
- **Wait a few minutes:** GitHub needs time to provision SSL
- **Check settings:** Go to Settings → Pages and verify domain status
- **Try www version:** If apex doesn't work, try www.tscc.co.in

## 📝 Important Notes

- The site automatically detects which domain it's on
- No manual configuration needed - it works for both domains
- GitHub Pages serves the same build for both domains
- The router basename adjusts automatically based on hostname

## 🔄 After DNS Changes

Once DNS is configured and GitHub recognizes your domain:

1. GitHub will create a `CNAME` file in your repository
2. SSL certificate will be automatically provisioned
3. Your site will be accessible at https://tscc.co.in
4. Both HTTP and HTTPS will work (HTTPS is recommended)

## ✨ That's It!

Your site is now configured to work with your custom domain. Just make sure:
- ✅ DNS is configured correctly
- ✅ Custom domain is added in GitHub Pages settings
- ✅ Changes are committed and pushed
- ✅ Wait for DNS propagation (if just configured)

