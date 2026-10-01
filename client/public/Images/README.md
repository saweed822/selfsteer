This folder contains branding assets for the site.

The favicon uses `favicon-source.png`, copied from the supplied `../favi_con.png`
Self Steer logo. The older `favicon.svg` is not used for the favicon.

How to regenerate PNG and ICO files from the source logo:

Requirements:
- ImageMagick (provides `convert`) installed on your system.

From the project root run:

```bash
bash client/scripts/generate-favicons.sh
```

This creates:
- `favicon-32.png` (32x32)
- `favicon-192.png` (192x192)
- `apple-touch-icon.png` (180x180)
- `../favicon.png` (128x128)
- `../favicon.ico` (32x32 and 48x48, served at `/favicon.ico`)

The generated favicon files are checked into version control so Vite includes them
in every build without requiring ImageMagick on the build server. After regenerating,
commit the updated files along with the PNG source.

The HTML declares the PNG icons explicitly, including the 192x192 icon for search
results, and a root ICO fallback for browsers. After deploying an icon change, use
Google Search Console's URL Inspection tool to request indexing of the home page.
Google may take several days to several weeks to refresh the search-result icon.
