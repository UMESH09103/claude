# 🚀 Quick Setup Guide

## Installation & Running Locally

### Step 1: Extract Files
Extract all files to a folder named `darshan-portfolio`

### Step 2: Open Terminal
Navigate to the project folder:
```bash
cd darshan-portfolio
```

### Step 3: Install Dependencies
```bash
npm install
```

This may take 2-3 minutes depending on your internet speed.

### Step 4: Start Development Server
```bash
npm run dev
```

The portfolio will automatically open in your browser at `http://localhost:5173`

### Step 5: Make Changes
- Edit `src/App.jsx` to customize content
- Restart the dev server to see changes
- All changes are hot-reloaded in real-time

---

## 🏗️ Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

---

## 📤 Deployment Guide

### Option 1: Netlify (Recommended - Easy)

1. Go to [Netlify](https://netlify.com)
2. Click "Add New Site" → "Import an existing project"
3. Select GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click Deploy!

### Option 2: GitHub Pages

1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/darshan-portfolio"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add scripts to `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

### Option 3: Vercel (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects React/Vite setup
4. Click Deploy!

### Option 4: Manual Hosting (Any Web Server)

1. Build the project: `npm run build`
2. Copy contents of `dist` folder
3. Upload to your web hosting (FTP/SSH)
4. Set `index.html` as default page

---

## 🎨 Customization Tips

### Change Colors
Open `tailwind.config.js` and modify colors:
```javascript
colors: {
  cyan: '#your-color',
  blue: '#your-color'
}
```

### Update Personal Info
Edit `src/App.jsx` and search for:
- "Darshan Thatsingar" → Your name
- "Electronics & Telecommunication Engineer" → Your title
- Email and phone → Your contact info

### Add Your Photo
Replace the profile image URL in Hero section:
```jsx
<img src="YOUR_IMAGE_URL" alt="Your Name" />
```

### Update Projects
Modify the projects array in the Projects section

### Change Social Links
Update URLs in hero and contact sections

---

## ⚠️ Common Issues & Solutions

### Issue: npm install fails
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 5173 already in use
**Solution**:
```bash
npm run dev -- --port 3000
```

### Issue: Build fails
**Solution**:
```bash
npm cache clean --force
npm install
npm run build
```

### Issue: Deployment shows blank page
**Solution**:
- Check `vite.config.js` for correct base path
- Ensure all assets are in `dist` folder
- Clear browser cache (Ctrl+Shift+Delete)

---

## 📞 Need Help?

1. Check the README.md for detailed documentation
2. Review the code comments in `src/App.jsx`
3. Check deployment documentation for your platform
4. Contact: darshan.thatsingar@mitaoe.ac.in

---

## ✅ Checklist Before Deployment

- [ ] Updated personal information
- [ ] Added profile photo
- [ ] Updated skills and experience
- [ ] Added/modified projects
- [ ] Updated social media links
- [ ] Updated contact information
- [ ] Tested on mobile devices
- [ ] Built the project successfully
- [ ] Deployed to your platform
- [ ] Tested the live website

---

Happy deploying! 🎉
