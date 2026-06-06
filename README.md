# M&A Study App — HSLU MSc Banking & Finance (FS26)

A self-contained study web app for the **Mergers & Acquisitions** course and exam.
Pure HTML/CSS/JavaScript — no build step, no backend — so it runs straight from
**GitHub Pages**.

## Features

- **Name gate** — everyone enters their name to start (and to appear on the leaderboard).
- **Summary** — the full course condensed into 15 expandable topic cards (process, valuation,
  DCF, multiples, EV→Equity bridge, LBO, due diligence, SPA/risk allocation, ESG, PMI, the
  Project Spirit case…).
- **Flashcards** — 40 flip cards (click to flip, shuffle, prev/next).
- **MC Quiz** — 10 questions in the real **exam format**: *choose the 2 correct answers of 5*,
  2 points each (20 pts). Instant grading with explanations.
- **Calculations** — 8 fill-in numeric questions (incl. the 4 graded lecture exercises:
  LBO money multiple, EV→Equity bridge, debt capacity, net debt …), 4 points each, with
  hints and worked solutions.
- **Leaderboard** — best total score per name, saved in the browser (localStorage), with
  medals for the top 3.

> Exam format mirrored: **45 min · closed book · 10 MC (2 of 5) + 5 calculations · 40 points.**

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repository named **`M-A-studyapp`** on GitHub.
2. Push this folder to it (see the commands printed by the setup, or below).
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   choose **`main`** branch and **`/ (root)`**, then **Save**.
4. After a minute the app is live at
   `https://<your-username>.github.io/M-A-studyapp/`.

```bash
git init
git add .
git commit -m "M&A study app"
git branch -M main
git remote add origin https://github.com/<your-username>/M-A-studyapp.git
git push -u origin main
```

## Notes

- The leaderboard is **per-device** (localStorage) because GitHub Pages is static (no server).
  Share the link and each person enters their own name to build their ranking locally.
- All content lives in `js/data.js`, so summaries, cards and questions are easy to edit.

## Files

```
index.html        app shell + name gate
css/style.css     styling incl. the 3D flip-card animation
js/data.js        all content (summary, flashcards, MC, calculations)
js/app.js         logic: gate, navigation, flip, scoring, leaderboard
```
