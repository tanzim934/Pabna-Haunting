# The Pabna Haunting | React + Vite hackathon edition

A four-node, responsive fictional investigative horror game set in Pabna, Bangladesh, built for the **Capstone Mini-Hackathon: The Pabna Haunting (Multi-Page Edition)**.

## Run locally

Prerequisites: Node.js 18+ (Node 20 or 22 recommended) and npm.

```bash
npm install
npm run dev
```

Open the localhost URL Vite prints, usually `http://localhost:5173`.

```bash
npm run build
npm run preview
```

## Hackathon requirements

- **Gateway** (`/`): narrative, folklore atmosphere, form validation, in-game 4-digit clearance.
- **Surveillance** (`/surveillance`): six simulated CCTV feeds, exposure/distortion/gain filters, night vision and glitch controls. Three unlockable evidence digits.
- **Patient archive** (`/archive`): eight searchable/filterable patient files and three interactive ciphers themed around Pabna landmarks and the Ichamati River.
- **Lockdown** (`/lockdown`): persistent five-minute countdown, SVG telegraph/Morse wire puzzle, six-digit broadcast, rescue success or jumpscare/failure states.
- **Bonus**: Web Audio API synth ambience and effects, localStorage progress, interactive SVG mini-game, English/Bengali navigation and clue content.

### Game solution / examiner walkthrough

1. Gateway: enter any operator name of 2+ characters. Clearance passcode: **1947**.
2. Surveillance: on CAM–01 raise **Exposure to 74**; on CAM–02 raise **Distortion to 72**; on CAM–03 enable **Night vision**. Other camera feeds are decoys. Three GLITCH clicks give a hint on a locked feed.
3. Archive: inspect P-001, P-014 and P-021. Cipher answers: **ECHO**, **1915**, **ICHAMATI**.
4. Open the fingerprint icon for evidence: **714926**. Start Lockdown, match Morse **.- → A**, **- → T**, **. → E**, **-. → N**, and enter **714926** to transmit the rescue.
5. Refresh after any step to demonstrate persistence. Use **Reset** at the bottom to start over.

## GitHub

Create an empty GitHub repository, then in this folder:

```bash
git init
git add .
git commit -m "Build Pabna Haunting React game"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Vercel

1. Open https://vercel.com/new and import the GitHub repository.
2. Framework: **Vite**. Root directory: `./`. Build: `npm run build`. Output: `dist`.
3. Deploy. All client-side paths are covered by `vercel.json` SPA rewrites.
4. Submit the resulting `https://YOUR-DEPLOYMENT.vercel.app` link to your instructor.

## About Base44 and authentication

The supplied excerpts originated from Base44 and included dozens of shadcn/Radix UI components and real hosted authentication/MFA screens. **The original Base44 account database, SMS gateway, OAuth integration, MFA provider, App ID and secret credentials were not supplied.** These cannot be reconstructed safely from screenshots. This edition is a **standalone playable adaptation**, not an exact reproduction of the original hosted application. Login/Register/MFA routes deliberately show an explanation instead of pretending to authenticate users. The game instead uses a fictional, openly documented clearance passcode and persists only non-sensitive game progress in `localStorage`. Do not rely on that passcode for actual security.

Reusable UI primitives are in `src/components/ui/` as standalone compatibility wrappers; unused Base44 account-management components are not required for the game. All puzzle-related features live in `src/lib/haunting.js`, `src/lib/audio.js`, and `src/lib/i18n.js`.

## Originality and historical context

The asylum, incidents and patient records are **fictional**. Pabna place names are geographic and historical inspiration, not claims of paranormal events or real patient identities. No external image service is needed; `public/assets/hospital.svg` is a project-owned illustration.

## Vercel Deployment Link

🌐 **Live Website:** [Pabna Haunting](https://pabna-haunting-6mwra1pat-my-projects-4edc.vercel.app/)

**Deployment Platform:** Vercel

**Status:** Deployed
