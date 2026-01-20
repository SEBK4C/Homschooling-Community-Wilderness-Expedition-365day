# A/B Testing Deployment Guide for GitHub Pages

A practical play-by-play guide for deploying multiple website variants to subfolders on GitHub Pages using branch-based workflows. Based on real implementation experience.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Prerequisites](#prerequisites)
4. [Step-by-Step Setup](#step-by-step-setup)
5. [The Workflow File (Explained)](#the-workflow-file-explained)
6. [What Worked](#what-worked)
7. [What Did NOT Work (Gotchas)](#what-did-not-work-gotchas)
8. [Troubleshooting](#troubleshooting)
9. [Template for Future Projects](#template-for-future-projects)

---

## Overview

### The Goal

Deploy multiple variants of a website (e.g., different color palettes, layouts, or features) to separate URLs for A/B testing:

```
https://yourdomain.com/              → Landing page with links to variants
https://yourdomain.com/variant-a/    → First variant
https://yourdomain.com/variant-b/    → Second variant
```

### The Technique

- Each variant lives on its own Git branch
- GitHub Actions builds each branch and deploys to a subfolder on `gh-pages`
- The `peaceiris/actions-gh-pages` action handles deployment with `keep_files: true` to preserve other variants
- A landing page at the root links to all variants

---

## Architecture

```
Repository Structure:
├── main branch           → Source of truth, workflow definitions
├── variant-a branch      → First variant (e.g., color palette A)
├── variant-b branch      → Second variant (e.g., color palette B)
└── gh-pages branch       → Deployed output (auto-managed)

gh-pages branch structure:
├── index.html            → A/B test landing page
├── CNAME                 → Custom domain file (CRITICAL!)
├── .nojekyll             → Tells GitHub to serve files as-is
├── variant-a/
│   ├── index.html
│   └── assets/
└── variant-b/
    ├── index.html
    └── assets/
```

---

## Prerequisites

1. **Vite-based project** (or any build tool that supports `--base` flag)
2. **GitHub repository** with GitHub Pages enabled
3. **Custom domain** (optional but recommended for professional A/B tests)
4. **Node.js project** with `npm ci` and `npm run build` scripts

---

## Step-by-Step Setup

### Step 1: Create Your Variant Branches

Start from your main branch and create separate branches for each variant:

```bash
# Create variant A branch
git checkout main
git checkout -b variant-a-name
# Make your changes (colors, layout, etc.)
git add .
git commit -m "Variant A: Description of changes"
git push -u origin variant-a-name

# Create variant B branch
git checkout main
git checkout -b variant-b-name
# Make different changes
git add .
git commit -m "Variant B: Description of changes"
git push -u origin variant-b-name
```

### Step 2: Create the Workflow File

Create `.github/workflows/deploy-previews.yml` on your **main branch**.

> **IMPORTANT**: The workflow file must exist on main AND on each variant branch for those branches to trigger deployments.

```bash
mkdir -p .github/workflows
```

See [The Workflow File (Explained)](#the-workflow-file-explained) for the complete file.

### Step 3: Add Workflow to Each Variant Branch

This is a critical step that's easy to miss:

```bash
# For each variant branch, cherry-pick or copy the workflow file
git checkout variant-a-name
git checkout main -- .github/workflows/deploy-previews.yml
git add .github/workflows/deploy-previews.yml
git commit -m "Add A/B test deployment workflow"
git push

# Repeat for variant B
git checkout variant-b-name
git checkout main -- .github/workflows/deploy-previews.yml
git add .github/workflows/deploy-previews.yml
git commit -m "Add A/B test deployment workflow"
git push
```

### Step 4: Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Set **Source** to "Deploy from a branch"
3. Set **Branch** to `gh-pages` and folder to `/ (root)`
4. If using custom domain, enter it and enable HTTPS

### Step 5: Trigger Initial Deployments

Push a small change to each branch, or use "Re-run all jobs" in GitHub Actions:

```bash
# Trigger main
git checkout main
git commit --allow-empty -m "Trigger deployment"
git push

# Trigger variants
git checkout variant-a-name
git commit --allow-empty -m "Trigger deployment"
git push
```

### Step 6: Verify Deployments

Check GitHub Actions tab for successful runs, then visit:
- `https://yourdomain.com/` (or `https://username.github.io/repo/`)
- `https://yourdomain.com/variant-a/`
- `https://yourdomain.com/variant-b/`

---

## The Workflow File (Explained)

```yaml
name: Deploy A/B Test Previews

# TRIGGER: Runs on push to main or any variant branches
# Adjust the branch patterns to match your naming convention
on:
  push:
    branches:
      - main
      - 'variant-*'              # Matches variant-a, variant-b, etc.
      # Or use specific patterns:
      # - 'palette-*'
      # - 'feature/*'
  workflow_dispatch:             # Allows manual triggering

# PERMISSIONS: Required for pushing to gh-pages
permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # 1. CHECKOUT: Get the code from the branch that triggered the workflow
      - name: Checkout current branch
        uses: actions/checkout@v4

      # 2. SETUP NODE: Install Node.js with caching for faster builds
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      # 3. INSTALL: Clean install of dependencies
      - name: Install dependencies
        run: npm ci

      # 4. DETERMINE FOLDER: Map branch names to deployment folder names
      # This is where you define which branch goes to which subfolder
      - name: Determine branch folder name
        id: branch
        run: |
          BRANCH_NAME="${GITHUB_REF_NAME}"

          # Map branch names to folder names
          if [[ "$BRANCH_NAME" == "main" ]]; then
            FOLDER_NAME="main"
          elif [[ "$BRANCH_NAME" == *"variant-a"* ]]; then
            FOLDER_NAME="variant-a"
          elif [[ "$BRANCH_NAME" == *"variant-b"* ]]; then
            FOLDER_NAME="variant-b"
          else
            # Fallback: sanitize branch name for use as folder
            FOLDER_NAME=$(echo "$BRANCH_NAME" | sed 's/[^a-zA-Z0-9]/-/g')
          fi

          echo "folder=$FOLDER_NAME" >> $GITHUB_OUTPUT
          echo "Deploying to folder: $FOLDER_NAME"

      # 5. BUILD: Build with the correct base path for subfolder deployment
      # The --base flag is CRITICAL - assets won't load without it
      - name: Build for subfolder
        run: |
          npm run build -- --base=/${{ steps.branch.outputs.folder }}/
        env:
          NODE_ENV: production

      # 6. DEPLOY: Push built files to gh-pages subfolder
      - name: Deploy to GitHub Pages subfolder
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          destination_dir: ${{ steps.branch.outputs.folder }}
          keep_files: true           # CRITICAL: Don't delete other variants!
          cname: yourdomain.com      # CRITICAL for custom domains!
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
          commit_message: 'Deploy ${{ steps.branch.outputs.folder }} preview'

  # OPTIONAL: Create a landing page linking to all variants
  # Only runs when main branch is pushed
  create-index:
    runs-on: ubuntu-latest
    needs: build-and-deploy
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Checkout gh-pages
        uses: actions/checkout@v4
        with:
          ref: gh-pages
          fetch-depth: 0

      - name: Create index page for A/B testing
        run: |
          cat > index.html << 'EOF'
          <!DOCTYPE html>
          <html>
          <head>
            <title>A/B Test Variants</title>
          </head>
          <body>
            <h1>Choose a Variant</h1>
            <ul>
              <li><a href="./variant-a/">Variant A</a></li>
              <li><a href="./variant-b/">Variant B</a></li>
            </ul>
          </body>
          </html>
          EOF

      # Ensure CNAME exists for custom domain
      - name: Ensure CNAME file exists
        run: |
          echo "yourdomain.com" > CNAME

      - name: Commit changes
        run: |
          git config user.name 'github-actions[bot]'
          git config user.email 'github-actions[bot]@users.noreply.github.com'
          git add index.html CNAME
          git diff --staged --quiet || git commit -m 'Update A/B test index page'
          git push
```

---

## What Worked

### 1. Branch-based variant management
Each variant on its own branch keeps changes isolated and easy to compare with `git diff`.

### 2. `keep_files: true` in peaceiris/actions-gh-pages
This preserves other subfolders when deploying one variant. Without it, each deployment would wipe out other variants.

### 3. Dynamic `--base` flag in Vite build
```bash
npm run build -- --base=/variant-a/
```
This ensures all asset paths (JS, CSS, images) are correct for the subfolder.

### 4. Using `destination_dir` for subfolder deployment
The peaceiris action's `destination_dir` parameter cleanly puts each build in its own folder.

### 5. Conditional `create-index` job
Using `if: github.ref == 'refs/heads/main'` ensures the landing page is only updated from main, not from variant branches.

### 6. `workflow_dispatch` trigger
Allows manual re-runs from the GitHub Actions UI - invaluable for debugging.

---

## What Did NOT Work (Gotchas)

### 1. Missing CNAME file = 404 errors on custom domain

**Symptom**: Files exist on gh-pages but custom domain returns "404 - File not found"

**Cause**: GitHub Pages requires a `CNAME` file at the root of gh-pages for custom domains.

**Solution**: Add `cname: yourdomain.com` to the peaceiris/actions-gh-pages step:
```yaml
- name: Deploy to GitHub Pages subfolder
  uses: peaceiris/actions-gh-pages@v4
  with:
    cname: yourdomain.com  # ADD THIS!
    # ... other options
```

### 2. Workflow file not on variant branches = no deployment

**Symptom**: Pushing to variant branch doesn't trigger any workflow

**Cause**: GitHub Actions only runs workflows that exist on the branch being pushed.

**Solution**: Copy the workflow file to each variant branch:
```bash
git checkout variant-branch
git checkout main -- .github/workflows/deploy-previews.yml
git commit -m "Add workflow"
git push
```

### 3. Merging branches contaminated variants

**Symptom**: After merging PR to main, variant branches had wrong colors/content

**Cause**: Merging brought main's changes into the variant branches

**Solution**: Keep variant branches independent. If you need workflow updates:
```bash
# Cherry-pick only the workflow commit, don't merge
git checkout variant-branch
git cherry-pick <commit-hash-of-workflow-change>
```

Or reset to the correct commit:
```bash
git reset --hard <original-variant-commit>
git cherry-pick <workflow-commit>
git push --force-with-lease
```

### 4. GitHub App lacks `workflows` permission

**Symptom**: Push rejected with "refusing to allow a GitHub App to create or update workflow"

**Cause**: Some CI/CD systems and GitHub Apps don't have permission to modify workflow files.

**Solution**: Update workflow files manually via GitHub's web interface, or configure the App with `workflows` permission.

### 5. Forgetting `--base` flag = broken assets

**Symptom**: Page loads but CSS/JS files return 404

**Cause**: Vite builds with `base: '/'` by default, but files are served from `/variant-a/`

**Solution**: Always build with the correct base path:
```bash
npm run build -- --base=/variant-a/
```

### 6. Missing `.nojekyll` file

**Symptom**: Files starting with underscore (like `_assets/`) return 404

**Cause**: Jekyll (GitHub Pages default) ignores files/folders starting with underscore

**Solution**: The peaceiris action creates `.nojekyll` automatically, but verify it exists:
```bash
git show origin/gh-pages:.nojekyll
```

---

## Troubleshooting

### Check 1: Does the workflow trigger?

Go to **Actions** tab in GitHub. If no workflow runs after pushing:
- Verify workflow file exists on the pushed branch
- Check branch name matches the `on.push.branches` patterns
- Look for syntax errors in the workflow YAML

### Check 2: Does the build succeed?

If workflow runs but fails:
- Click into the failed run and read the error logs
- Common issues: missing dependencies, build errors, TypeScript errors

### Check 3: Do files exist on gh-pages?

```bash
# List files on gh-pages
git fetch origin gh-pages
git ls-tree -r origin/gh-pages --name-only

# Check specific subfolder
git ls-tree origin/gh-pages:variant-a/
```

### Check 4: Are asset paths correct?

View source of deployed page:
```html
<!-- CORRECT (with subfolder base): -->
<script src="/variant-a/assets/index-abc123.js"></script>

<!-- WRONG (missing subfolder): -->
<script src="/assets/index-abc123.js"></script>
```

### Check 5: Is CNAME present?

```bash
git show origin/gh-pages:CNAME
```

Should output your custom domain. If missing, that's your 404 cause.

### Check 6: GitHub Pages settings

Repository **Settings** → **Pages**:
- Source should be "Deploy from a branch"
- Branch should be `gh-pages` with `/ (root)`
- Custom domain should match your CNAME file

---

## Template for Future Projects

### Quick Start Checklist

1. [ ] Create Vite/React/Vue project with `npm run build` script
2. [ ] Initialize git and push to GitHub
3. [ ] Create variant branches with different styles/features
4. [ ] Add workflow file to main branch (copy template below)
5. [ ] Copy workflow file to each variant branch
6. [ ] Enable GitHub Pages (Settings → Pages → gh-pages branch)
7. [ ] Configure custom domain if needed
8. [ ] Push to trigger deployments
9. [ ] Verify all URLs work

### Minimal Workflow Template

Save as `.github/workflows/deploy-variants.yml`:

```yaml
name: Deploy Variants

on:
  push:
    branches:
      - main
      - 'variant-*'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci

      - name: Set folder name
        id: folder
        run: |
          if [[ "$GITHUB_REF_NAME" == "main" ]]; then
            echo "name=main" >> $GITHUB_OUTPUT
          else
            echo "name=$GITHUB_REF_NAME" >> $GITHUB_OUTPUT
          fi

      - name: Build
        run: npm run build -- --base=/${{ steps.folder.outputs.name }}/

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          destination_dir: ${{ steps.folder.outputs.name }}
          keep_files: true
          cname: your-domain.com  # Remove if no custom domain
```

### Branch Naming Conventions

Recommended patterns:
- `variant-a`, `variant-b`, `variant-c`
- `palette-warm`, `palette-cool`
- `layout-modern`, `layout-classic`
- `feature/dark-mode`, `feature/new-nav`

Match your workflow's branch patterns accordingly.

---

## Summary

| Step | Action | Why It Matters |
|------|--------|----------------|
| 1 | Create variant branches | Isolates each version |
| 2 | Add workflow to main | Defines deployment process |
| 3 | Copy workflow to variants | Triggers deployment on push |
| 4 | Use `--base` in build | Correct asset paths |
| 5 | Use `keep_files: true` | Preserves other variants |
| 6 | Add `cname` parameter | Fixes custom domain 404s |
| 7 | Enable GitHub Pages | Serves the content |

**The key insight**: Each branch deploys to its own subfolder, and `keep_files: true` ensures deployments don't overwrite each other. The `cname` parameter is essential for custom domains.

---

*Last updated: January 2026*
*Based on implementation for Wild Year (wildyear.one)*
