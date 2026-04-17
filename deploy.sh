#!/bin/bash
set -e

cd "$(dirname "$0")"

echo "Setting git config..."
git config core.pager cat

echo "Staging all changes..."
git add -A

echo "Checking git status..."
git status

echo "Committing changes..."
git commit -m "GitHub Pages deployment: vite config and dist build" || echo "No new changes to commit"

echo "Force pushing to main branch..."
git push -f origin main

echo "Push completed!"
