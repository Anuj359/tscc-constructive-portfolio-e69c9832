#!/bin/bash

# GitHub Pages Deployment Script
# This script builds and prepares the site for GitHub Pages deployment

echo "🚀 Building for GitHub Pages..."

# Build the project
npm run build:gh-pages

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📦 Build output is in the 'dist' folder"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://anuj359.github.io/tscc-constructive-portfolio-e69c9832/"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Commit and push your changes:"
    echo "      git add ."
    echo "      git commit -m 'Deploy to GitHub Pages'"
    echo "      git push origin main"
    echo ""
    echo "   2. The GitHub Actions workflow will automatically deploy"
    echo "   3. Check the Actions tab in your repository for deployment status"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

