#!/usr/bin/env bash
set -euo pipefail

# Generate PNG and ICO favicons from the supplied square logo.
# Requires ImageMagick (`convert`) to be installed locally.
# Usage: bash client/scripts/generate-favicons.sh

SOURCE="client/public/Images/favicon-source.png"
OUT_DIR="client/public/Images"

if [ ! -f "$SOURCE" ]; then
  echo "Logo source not found: $SOURCE"
  exit 1
fi

mkdir -p "$OUT_DIR"

echo "Generating PNG fallbacks..."
convert "$SOURCE" -resize 32x32 "$OUT_DIR/favicon-32.png"
convert "$SOURCE" -resize 192x192 "$OUT_DIR/favicon-192.png"
convert "$SOURCE" -resize 180x180 "$OUT_DIR/apple-touch-icon.png"
convert "$SOURCE" -resize 128x128 "client/public/favicon.png"

echo "Generating favicon.ico..."
convert "$SOURCE" -define icon:auto-resize=48,32 "client/public/favicon.ico"

echo "Generated files in $OUT_DIR:"
ls -1 "$OUT_DIR" | sed -n '1,200p'

echo "Done. Upload or commit the generated files as needed."
