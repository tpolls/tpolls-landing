# tPolls - Telegram/TON Polling Landing Page

A production-ready React landing page for tPolls, a Telegram/TON mini-app for incentivized polls.

## Features

- 🎨 Modern, responsive design with light/dark theme support
- ⚡ Built with React, TypeScript, and Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 Tailwind CSS for styling
- 📱 Mobile-first responsive design
- 🌙 Theme toggle (light/dark mode)

## Quick Start

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

The built files will be in the `dist/public` directory.

## Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect this as a static site and deploy it

### Method 3: Direct Upload

1. Run the build command:
   ```bash
   npm run build
   ```

2. Upload the `dist/public` folder contents to Vercel as a static site

## Environment Variables

No environment variables are required for this frontend-only application.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: Wouter
- **UI Components**: Radix UI (shadcn/ui)

## Project Structure

```
├── client/src/
│   ├── components/
│   │   ├── landing/          # Landing page sections
│   │   ├── ui/              # Reusable UI components
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── pages/
│   │   ├── home.tsx         # Main landing page
│   │   └── not-found.tsx
│   ├── lib/
│   ├── App.tsx
│   └── main.tsx
├── vercel.json              # Vercel deployment config
└── README.md
```

## License

MIT