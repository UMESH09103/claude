# Darshan Thatsingar - Premium Portfolio Website

A modern, fully responsive portfolio website built with React, Tailwind CSS, Framer Motion, and Three.js featuring advanced animations, glassmorphism design, and stunning visual effects.

## 🌟 Features

### Design & UX
- **Dark Theme with Neon Accents**: Modern dark UI with glowing cyan and blue accents
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **3D Effects**: Three.js for floating objects and depth effects
- **Responsive Design**: Mobile-first approach, perfect on all devices
- **Gradient Effects**: Beautiful gradient text, backgrounds, and buttons

### Interactive Elements
- **Smooth Scroll Navigation**: Instant navigation between sections
- **Progress Indicator**: Visual scroll progress bar at the top
- **Hover Animations**: Interactive card hover effects with depth
- **Parallax Scrolling**: Subtle parallax effects on scroll
- **Animated Loading**: Modern loading animations
- **Social Media Integration**: Links to LinkedIn, GitHub, and Email

### Performance
- **Fast Loading**: Optimized with Vite
- **Lazy Loading**: Images and components load on demand
- **SEO Optimized**: Meta tags and semantic HTML
- **Mobile Optimized**: Fast and smooth on mobile devices

## 🛠 Tech Stack

- **Frontend Framework**: React 18+
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 5
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **HTTP Client**: Axios (optional)

## 📋 Sections

1. **Hero Section**
   - Profile image with glow effect
   - Dynamic name animation
   - Professional title and bio
   - CTA buttons and social links
   - Scroll indicator

2. **About Section**
   - Professional bio
   - Key statistics
   - Skills highlights
   - Tag system for expertise areas

3. **Skills Section**
   - Categorized skills (Programming, ERP, Design, Domain)
   - Interactive skill cards
   - Hover animations

4. **Experience Section**
   - Timeline of internships and work
   - Company and role details
   - Animated cards
   - Icons for visual hierarchy

5. **Projects Section**
   - Featured project showcase
   - Project descriptions and tags
   - Hover effects
   - Project categories

6. **Contact Section**
   - Contact form
   - Direct email and phone
   - Location information
   - Social media links

7. **Footer**
   - Copyright information
   - Credits

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm or yarn
- Git

### Installation

1. **Extract the portfolio files**
```bash
cd darshan-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

The portfolio will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized build in the `dist` folder.

## 📁 Project Structure

```
darshan-portfolio/
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main portfolio component
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies
└── README.md              # This file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change color schemes:
```javascript
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

### Content
Edit `src/App.jsx` to update:
- Personal information
- Skills and experience
- Projects
- Contact details
- Social links

### Fonts
Modify the font family in `index.css` or `tailwind.config.js`

### Profile Image
Replace the placeholder image in the Hero section:
```jsx
<img
  src="YOUR_IMAGE_URL"
  alt="Darshan"
  className="..."
/>
```

## 🔗 Deployment Options

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Connect your GitHub repository
2. Vercel auto-detects React/Vite setup
3. Deploy automatically

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder contents to your web hosting
3. Set index.html as the default page

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Lazy Load Images**: Use `loading="lazy"` attribute
2. **Optimize Images**: Compress before adding
3. **Code Splitting**: Vite handles this automatically
4. **Cache Resources**: Configured in Vite

## 🔐 Security

- No sensitive data stored in frontend code
- Contact form should be handled by backend service
- Update dependencies regularly: `npm update`
- Use environment variables for API endpoints

## 📝 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support & Contact

For questions or customization needs:
- Email: darshan.thatsingar@mitaoe.ac.in
- Phone: +91 8767232070
- LinkedIn: https://linkedin.com/in/darshan-thatsingar-810a88258

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Three.js Documentation](https://threejs.org/docs/)

---

Built with ❤️ by Darshan Thatsingar
