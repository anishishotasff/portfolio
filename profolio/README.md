# Python Developer Portfolio

A modern, responsive portfolio website designed for Python developers to showcase their skills, projects, and experience.

## Features

✨ **Modern Design**
- Clean and professional layout
- Responsive design for all devices
- Smooth animations and transitions
- Dark/Light color scheme

📱 **Sections**
- **Home**: Eye-catching hero section with call-to-action buttons
- **About**: Personal introduction and key statistics
- **Skills**: Technical skills organized by categories
- **Projects**: Showcase of featured projects with details
- **Contact**: Contact form and social media links

🎯 **Functionality**
- Smooth scrolling navigation
- Interactive project cards
- Contact form
- Mobile hamburger menu
- Scroll-to-top button
- Social media links

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # Interactive features
├── projects/           # Folder for project details
├── images/             # Folder for images
└── README.md           # This file
```

## Getting Started

### Prerequisites
- A modern web browser
- No server required - static HTML/CSS/JavaScript

### Installation

1. Clone or download the portfolio files
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   # or
   python -m SimpleHTTPServer 8000
   ```

## Customization

### Update Personal Information

1. **index.html**: 
   - Change the title tag
   - Update "Your Name" in the hero section
   - Modify the about section text
   - Update contact email and social media links

2. **Add Your Projects**:
   - Edit the project cards in the projects section
   - Update project titles, descriptions, and links
   - Replace placeholder icons with your own

3. **Modify Skills**:
   - Add or remove skill tags in the skills section
   - Reorganize skill categories as needed

### Styling

- Colors are defined in CSS variables at the top of `styles.css`
- Main colors:
  - Primary: `#3b82f6` (Blue)
  - Secondary: `#1f2937` (Dark)
  - Accent: `#f59e0b` (Amber)

Modify these values to match your brand:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #1f2937;
    --accent-color: #f59e0b;
    /* ... */
}
```

## Adding Content

### Add New Projects

Duplicate a project card and update:
- Icon (from Font Awesome)
- Title and description
- Technology tags
- GitHub and demo links

### Add Social Links

Update the social-links section in the hero area:
```html
<a href="https://github.com/yourprofile" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

## Font Awesome Icons

This portfolio uses Font Awesome 6.4.0 for icons. Browse available icons at: https://fontawesome.com/icons

## Deployment

### Firebase Hosting

1. Install the Firebase CLI (if not already installed):

```powershell
npm install -g firebase-tools
```

2. Login and initialize (run from `d:\profolio`):

```powershell
firebase login
firebase init hosting
```

When asked, select or create a project, set `public` to `.` (or keep as default), and choose to configure as a single-page app (rewrite all URLs to `index.html`) if prompted.

3. Replace placeholders in `js/firebase-init.js` with your actual Firebase project credentials (from the Firebase Console -> Project settings -> SDK setup).

4. Deploy:

```powershell
firebase deploy --only hosting
```

Notes:
- The repo includes `firebase.json` and `.firebaserc` with placeholders to make deployment straightforward. Replace `YOUR_PROJECT_ID` in `.firebaserc` or choose the project during `firebase init`.
- The contact form will save submissions to a `contacts` collection in Firestore. Ensure Firestore is enabled in your Firebase project and set appropriate security rules before going to production.

### GitHub Pages

1. Create a GitHub repository
2. Push your portfolio files
3. Enable GitHub Pages in repository settings
4. Your portfolio will be live at `username.github.io/portfolio`

### Other Hosting Options

- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Easy deployment with CLI
- **Any static web hosting service**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

- Minify CSS and JavaScript for production
- Optimize images before uploading
- Use lazy loading for images (coming soon)

## Future Enhancements

- [ ] Blog section
- [ ] Dark mode toggle
- [ ] PDF resume download
- [ ] Project filtering
- [ ] Testimonials section
- [ ] Video background for hero

## License

This portfolio template is free to use and modify for personal use.

## Support

For issues or questions, feel free to reach out through the contact form on the portfolio.

---

**Made with ❤️ for Python Developers**
