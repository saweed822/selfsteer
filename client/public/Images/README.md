This folder contains branding assets for the site.

How to generate PNG and ICO fallbacks from the source SVG:

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
- `social-preview.png` (1200x630)
- `favicon.ico`

Add and commit the generated files to version control if you want them served as static assets.
