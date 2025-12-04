# Firebase Deployment Guide

## Prerequisites
1. Install Node.js from https://nodejs.org/ (LTS version)
2. Restart your terminal after installation

## Setup Steps

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```
This will open your browser to authenticate with Google.

### 3. Create Firebase Project
- Go to https://console.firebase.google.com/
- Click "Add project"
- Enter a project name (e.g., "my-portfolio")
- Follow the setup wizard
- Copy your project ID

### 4. Link Your Project
```bash
firebase use --add
```
Select your project from the list and give it an alias (e.g., "default")

Or manually edit `.firebaserc` and replace `your-project-id` with your actual Firebase project ID.

### 5. Deploy to Firebase
```bash
firebase deploy
```

Your site will be live at: `https://your-project-id.web.app`

## Quick Deploy Commands

```bash
# Deploy everything
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# Preview locally before deploying
firebase serve
```

## Custom Domain (Optional)

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify and connect your domain

## Updating Your Site

After making changes to your portfolio:
```bash
firebase deploy
```

That's it! Your changes will be live in seconds.

## Troubleshooting

**Error: Not authorized**
- Run `firebase login` again

**Error: No project active**
- Run `firebase use --add` and select your project

**Changes not showing**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for CDN to update
