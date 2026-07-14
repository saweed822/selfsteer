#!/usr/bin/env bash
set -euo pipefail

# Simple script to generate PNG and ICO favicons from the SVG source.
# Requires ImageMagick (`convert`) to be installed locally.
# Usage: bash client/scripts/generate-favicons.sh

SVG="client/public/Images/favicon.svg"
OUT_DIR="client/public/Images"

if [ ! -f "$SVG" ]; then
  echo "SVG source not found: $SVG"
  exit 1
fi

mkdir -p "$OUT_DIR"

echo "Generating PNG fallbacks..."
convert "$SVG" -background none -resize 32x32 "$OUT_DIR/favicon-32.png"
convert "$SVG" -background none -resize 192x192 "$OUT_DIR/favicon-192.png"
convert "$SVG" -background none -resize 180x180 "$OUT_DIR/apple-touch-icon.png"
convert "$SVG" -background none -resize 1200x630 "$OUT_DIR/social-preview.png"

echo "Generating favicon.ico..."
convert "$OUT_DIR/favicon-32.png" "$OUT_DIR/favicon-192.png" -colors 256 "$OUT_DIR/favicon.ico"

echo "Generated files in $OUT_DIR:"
ls -1 "$OUT_DIR" | sed -n '1,200p'

echo "Done. Upload or commit the generated files as needed."
