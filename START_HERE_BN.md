# বাংলায় দ্রুত শুরু

## VS Code-এ চালাও

1. ZIP Extract করে `Pabna_Haunting_React_Complete` folder-টি VS Code-এ খোলো।
2. Node.js ইনস্টল না থাকলে আগে Node.js 20/22 LTS ইনস্টল করো।
3. Terminal-এ একবার `npm install`, তারপর `npm run dev` দাও।
4. Browser-এ সাধারণত `http://localhost:5173` দেখা যাবে।
5. Vercel-এ দেওয়ার আগে `npm run build` চালিয়ে নিশ্চিত হও।

## স্যারকে দেখানোর Demo sequence

- Gateway: যেকোনো নাম, passcode **1947**।
- CCTV CAM-01 Exposure **74**, CAM-02 Distortion **72**, CAM-03 **Night Vision ON**।
- Archive-এ তিনটি answer: **ECHO**, **1915**, **ICHAMATI**।
- Final evidence code **714926**।
- Lockdown-এ Morse signal .- = A, - = T, . = E, -. = N মিলিয়ে **714926** submit করো।
- Language Toggle এবং Sound Toggle, refresh-এর পর progress restore দেখাও।

## GitHub / Vercel

```bash
git init
git add .
git commit -m "Pabna Haunting hackathon"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Vercel -> Add New Project -> GitHub repo Import -> Framework `Vite` -> Build `npm run build` -> Output `dist` -> Deploy।

**সতর্কতা:** Base44-এর server-side login/SMS/MFA এই standalone version-এ নেই। ওই URL-গুলোতে demo notice দেখায়। Game-এর মূল চারটি page এবং puzzle-এর জন্য backend লাগে না।
