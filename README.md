# Ganesh Barve - Executive Portfolio & Resume

Senior Lead Data Engineer portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS. Features dynamic career experience calculation, dual dark/light theme, interactive timeline with multi-role career progression, 23+ technology matrix, dedicated education credentials, and printable ATS-ready CV.

---

## 🚀 Quick Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local dev server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view in the browser.

3. **Build production bundle:**
   ```bash
   npm run build
   ```

---

## 🌐 Deploy to GitHub Pages (Automated CI/CD)

This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site whenever you push changes to `main`.

### First-Time Setup:

1. **Create a new repository on GitHub:**
   - Go to [github.com/new](https://github.com/new).
   - Name it (e.g., `portfolio` or `ganeshbarve.github.io`).

2. **Initialize and push this codebase:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ganesh Barve Portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages via Actions:**
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.

That's it! GitHub Actions will trigger automatically, build your application, and publish it to:
`https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`

---

## 🔄 Daily Push & Pull Workflow

Whenever you make updates to your experience, skills, or achievements:

```bash
# 1. Pull any latest remote changes
git pull origin main

# 2. Stage and commit your edits
git add .
git commit -m "Update recent awards and skills"

# 3. Push to GitHub
git push origin main
```

Upon pushing, the GitHub Action automatically rebuilds and deploys the latest version within 1–2 minutes with zero downtime.
