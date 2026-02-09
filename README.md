# Moshi Dryclean - Modern Website

[![Build Status](https://github.com/yourusername/moshi-dryclean/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/yourusername/moshi-dryclean/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)

A modern, fast, and scalable website for **Moshi Dryclean** - a professional dry-cleaning and laundry service. Built with Next.js 15, TypeScript, and Tailwind CSS, fully optimized for Netlify deployment.

## ✨ Features

- **🚀 Next.js 15 App Router** - Latest React framework with app-focused routing
- **📱 Mobile-First Responsive Design** - Works perfectly on all devices
- **⚡ Performance Optimized** - Core Web Vitals optimized, fast page loads
- **🎨 Tailwind CSS** - Modern, utility-first styling
- **🔍 SEO Ready** - Meta tags, structured data, canonical URLs
- **♿ Accessibility** - WCAG 2.1 compliant with proper ARIA attributes
- **🔒 Security** - Security headers, CSP, and best practices included
- **🌱 Eco-Friendly** - Optimized for performance and sustainability
- **📦 TypeScript** - Full type safety across the codebase
- **🚀 Netlify Ready** - Pre-configured for seamless Netlify deployment
- **🔄 CI/CD** - GitHub Actions workflow for automated testing and deployment

## 🎯 Pages

- **Home** - Hero section, services overview, testimonials, CTA
- **Services** - Detailed service listings with descriptions
- **About** - Company information and values
- **Contact** - Contact form and information
- **404** - Custom not-found page

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[PostCSS](https://postcss.org/)** - CSS processing

### Development
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Node.js 20+](https://nodejs.org/)** - Runtime

### Deployment
- **[Netlify](https://netlify.com/)** - Hosting and deployment
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

## 📋 Requirements

- Node.js >= 20.0.0
- npm >= 10.0.0

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### 3. Build for Production

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```

### 5. Linting and Type Checking

```bash
# Run ESLint
npm run lint

# Type check
npm run type-check

# Format code
npm run format
```

## 📁 Project Structure

```
moshi-dryclean/
├── .github/
│   └── workflows/
│       └── ci-cd.yml                # GitHub Actions CI/CD workflow
├── public/                          # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   ├── services/
│   │   │   └── page.tsx            # Services page
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   └── not-found.tsx           # 404 page
│   └── components/
│       ├── Header.tsx              # Navigation header
│       ├── Hero.tsx                # Hero section
│       ├── Services.tsx            # Services showcase
│       ├── WhyChooseUs.tsx         # Benefits section
│       ├── Testimonials.tsx        # Customer testimonials
│       ├── CTA.tsx                 # Call to action
│       └── Footer.tsx              # Footer
├── .eslintrc.json                  # ESLint configuration
├── .prettierrc.json                # Prettier configuration
├── next.config.js                  # Next.js configuration
├── netlify.toml                    # Netlify configuration
├── postcss.config.mjs              # PostCSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## 🔧 Configuration Files

### netlify.toml
Pre-configured Netlify deployment settings with:
- Build command and output directory
- Environment variables
- Headers for security (CSP, X-Frame-Options, etc.)
- Cache control for static assets
- Custom redirects

### next.config.js
Optimized Next.js configuration including:
- Image optimization
- Security headers
- Performance enhancements
- Environment variables

### tailwind.config.ts
Custom Tailwind configuration with:
- Extended color palette (primary & secondary blues)
- Custom animations (fade-in, slide-up)
- Typography plugin
- Responsive utilities

## 🚀 Deployment to Netlify

### Automated Deployment (GitHub Actions)
The GitHub Actions workflow automatically:
1. Runs linting and type checks
2. Builds the project
3. Performs security checks
4. Deploys to Netlify (on main branch)

### Manual Deployment

1. **Connect Repository**: Connect your GitHub repository to Netlify
2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20
3. **Add Environment Variables** in Netlify dashboard:
   - `NODE_ENV=production`
   - `NODE_VERSION=20`
4. **Deploy**: Push to main branch or click "Deploy site"

### Setup GitHub Actions Secrets

Add these secrets in your GitHub repository settings:
- `NETLIFY_AUTH_TOKEN` - Your Netlify auth token
- `NETLIFY_SITE_ID` - Your Netlify site ID

Get these from:
- Token: [Netlify User Settings → Applications](https://app.netlify.com/user/applications)
- Site ID: [Netlify Site Settings → General](https://app.netlify.com/)

## 📊 Performance Optimizations

- **Image Optimization** - Automatic WebP/AVIF conversion
- **Code Splitting** - Automatic chunking of JavaScript
- **CSS Optimization** - Tree-shaken Tailwind CSS
- **Production Build** - Minified and optimized
- **CDN Caching** - Netlify global CDN
- **Core Web Vitals** - Optimized for LCP, FID, CLS

## 🔒 Security Features

- **Security Headers**:
  - Content-Security-Policy
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: SAMEORIGIN
  - X-XSS-Protection

- **Best Practices**:
  - TypeScript for type safety
  - ESLint configuration
  - Dependency auditing in CI/CD
  - Safe image handling

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Mobile-friendly touch targets

## 📝 Customization

### Update Site Metadata

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  // ... other metadata
};
```

### Update Business Information

- **Footer**: [`src/components/Footer.tsx`](src/components/Footer.tsx)
- **Contact**: [`src/app/contact/page.tsx`](src/app/contact/page.tsx)
- **Phone/Email**: Search for "+1 (234) 567-890" in components

### Add Images

Place images in `public/` folder and reference:

```typescript
<img src="/image-name.jpg" alt="Description" />
```

### Modify Colors

Edit `tailwind.config.ts` to customize the color palette.

## 🐛 Troubleshooting

### Build Fails
1. Clear cache: `npm cache clean --force`
2. Reinstall: `rm -rf node_modules && npm install`
3. Check Node version: `node --version` (should be 20+)

### Styling Issues
1. Rebuild Tailwind: Run `npm run build`
2. Check class names in components
3. Verify `tailwind.config.ts` is correct

### Deployment Issues
1. Check Netlify build logs
2. Verify environment variables in Netlify dashboard
3. Ensure `.next` folder is in deploy directory

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Netlify Docs](https://docs.netlify.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For questions or issues:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Review [Resources](#-resources)
3. Open an issue on GitHub
4. Contact: hello@moshi-dryclean.com

---

**Built with ❤️ for Moshi Dryclean**
