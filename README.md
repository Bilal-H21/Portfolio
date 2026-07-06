# Bilal Hussen - Professional Portfolio Website

A clean, modern, and fully responsive portfolio website built with semantic HTML5, clean CSS3 custom properties (variables), and vanilla JavaScript. Designed to showcase projects, skills, education, and certifications to recruiters and employers.

## 🚀 Live Demo & Hosting
The website is completely self-contained with no heavy external dependencies, making it perfectly suited for free hosting on platforms like **GitHub Pages**, **Netlify**, or **Vercel**.

---

## 🛠️ Features
- **Modern & Premium Design:** Sleek dark theme by default, with custom geometric shapes, gradients, and micro-interactions.
- **Light/Dark Mode Toggle:** Smooth transition between light and dark themes using CSS variables and local storage persistence.
- **Grouped Skills Grid:** Organized by languages, frontend tools, databases, and general engineering practices.
- **Featured Projects Section:** Showcases principal projects (Project Nur & Smart Workspace Automation) using larger, detailed layout cards.
- **Scannable Certifications:** Displays certifications in a compact list format with an interactive "Show More/Less" toggle to keep the page clean and readable.
- **Fully Responsive:** Perfectly optimized for mobile, tablet, and desktop screens.
- **Zero Heavy Dependencies:** Built using standard web standards for lightning-fast page speed.

---

## 💻 Local Preview
To view and test the website locally, you can open the `index.html` file directly in a browser, or run a lightweight local development server for the best experience (ensures local storage and scroll observers run accurately):

### Option 1: VS Code Live Server Extension (Recommended)
1. Open the project folder in VS Code.
2. Click **Go Live** in the bottom right status bar (requires the "Live Server" extension).

### Option 2: Python (Pre-installed on most systems)
Open your terminal inside the project directory and run:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your web browser.

### Option 3: Node.js (npx)
Open your terminal inside the project directory and run:
```bash
npx serve
```
Then open the local URL shown in your terminal.

---

## 🌐 Free Deployment Guide

### Option A: GitHub Pages (Easiest)
1. Initialize a Git repository, commit your files, and push them to a public GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
2. On GitHub, navigate to your repository's **Settings** tab.
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**, set the Source to **Deploy from a branch**.
5. Select the **main** branch and `/ (root)` folder, then click **Save**.
6. Within a minute, your portfolio will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

### Option B: Netlify
1. Sign up for a free account at [Netlify](https://www.netlify.com/).
2. Drag and drop the workspace folder containing `index.html`, `style.css`, and `script.js` directly into the Netlify Dashboard upload box.
3. Your site will deploy instantly! You can customize the site domain under Site Settings.

### Option C: Vercel
1. Install the Vercel CLI or sign up at [Vercel](https://vercel.com/).
2. Import your GitHub repository directly on the Vercel dashboard, or deploy from your command line using:
   ```bash
   npx vercel
   ```
3. Follow the quick terminal prompts to deploy your site in seconds.

---

## 📂 File Structure
- `index.html` - Contains the semantic page structure and content.
- `style.css` - Declares layout grids, variables, typography, animations, and responsive queries.
- `script.js` - Manages scroll triggers, navigation highlights, mobile menu toggles, and theme persistence.
