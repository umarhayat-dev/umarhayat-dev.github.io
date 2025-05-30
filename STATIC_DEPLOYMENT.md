
# Static Deployment Guide

This portfolio can now be deployed to any static hosting service since it no longer requires a backend server.

## GitHub Pages Deployment

1. **Build the app:**
   ```bash
   npm run build
   ```

2. **Push to GitHub:**
   - Push your code to a GitHub repository
   - The built files will be in the `dist` folder

3. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Select `main` branch and `/dist` folder
   - Your site will be available at `https://username.github.io/repository-name`

## Netlify Deployment

1. **Connect repository:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy:**
   - Click "Deploy site"
   - Your site will be live with a custom Netlify URL

## Vercel Deployment

1. **Import project:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure:**
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Deploy:**
   - Click "Deploy"
   - Your site will be live instantly

## Important Notes

- Make sure to configure EmailJS before deployment
- All contact form submissions will go directly to your email
- No server costs - completely free static hosting!
- Update the EmailJS configuration in the contact component before deploying

## Testing Locally

To test the static build locally:
```bash
npm run build
npm run preview
```

This will serve the built static files on a local server.
