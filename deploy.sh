#!/bin/sh
set -e

npm run build
rsync -avz --delete dist/ user@your-vps-ip:/var/www/blog/
echo "Deployed."
