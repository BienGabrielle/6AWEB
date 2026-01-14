Netlify deployment
------------------

Quick steps to deploy this Angular app to Netlify:

1. Build the project for production:

```powershell
npm install
npm run build
```

2. The production output will be in `dist/angular-routing-lab`.

3. In Netlify, create a new site -> "Deploy from Git" or drag & drop the `dist/angular-routing-lab` folder.

4. If you use Git-based deploy, set the build command to `npm run build` and the publish directory to `dist/angular-routing-lab`.

Optional: Add a `netlify.toml` (this repo includes one) so Netlify auto-detects settings.

Notes:
- Make sure `base href` in `src/index.html` is set to `/` (it is by default).
- After deployment, Netlify will serve the SPA; ensure client-side routing works by adding a redirect `_redirects` or using the Netlify `_redirects` rules if needed.
