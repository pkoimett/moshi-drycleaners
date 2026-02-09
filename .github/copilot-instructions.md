# Copilot Custom Instructions

This workspace contains the Moshi Dryclean website project - a modern Next.js website for a professional dry-cleaning service, optimized for Netlify deployment.

## Project Overview

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Netlify
- **CI/CD**: GitHub Actions

## Key Development Guidelines

### Code Standards

1. **TypeScript**: All files use TypeScript (.ts or .tsx)
   - Enable strict mode
   - Use proper type annotations
   - No `any` types without justification

2. **Component Structure**:
   - Keep components small and focused
   - Use functional components with hooks
   - Export components as default
   - Use "use client" directive for client components

3. **Naming Conventions**:
   - PascalCase for React components: `MyComponent.tsx`
   - camelCase for utilities and functions
   - kebab-case for file paths (if not components)

4. **Styling**:
   - Use Tailwind CSS utility classes
   - Avoid inline styles
   - Keep responsive design in mind
   - Use the predefined color palette from `tailwind.config.ts`

### Project Structure

- `/src/app` - Next.js app directory (pages and layouts)
- `/src/components` - Reusable React components
- `/src/styles` - Global styles and shared CSS
- `/public` - Static assets

### Performance & Best Practices

1. **Image Optimization**:
   - Use Next.js Image component where possible
   - Optimize images before committing
   - Use WebP format for better compression

2. **SEO**:
   - Always include proper meta tags
   - Use semantic HTML
   - Include alt text for images
   - Follow schema.org guidelines

3. **Accessibility**:
   - Use semantic HTML tags
   - Include ARIA labels where needed
   - Ensure keyboard navigation works
   - Test with screen readers

4. **Performance**:
   - Keep bundle size small
   - Use dynamic imports for large components
   - Optimize CSS with tree-shaking
   - Monitor Core Web Vitals

### Deployment & CI/CD

1. **Netlify Configuration**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20 or higher

2. **GitHub Actions**:
   - Automated linting and type checking
   - Build verification on PRs
   - Automatic deployment to Netlify on main branch

3. **Environment Variables**:
   - NEXT_PUBLIC_* for client-side variables
   - Store secrets in github/netlify settings
   - Document all environment variables

### Common Workflows

1. **Adding a New Page**:
   ```
   Create file: src/app/[name]/page.tsx
   Add metadata and layout
   Link from navigation components
   ```

2. **Creating a Component**:
   ```
   Create file: src/components/ComponentName.tsx
   Use TypeScript with React.FC or function syntax
   Export as default
   ```

3. **Deploying**:
   ```
   Push to main branch
   GitHub Actions builds automatically
   Netlify deploys when finished
   ```

## Useful Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Verify TypeScript
- `npm run format` - Format code with Prettier

## Important Files

- `next.config.js` - Next.js configuration (security, images, etc.)
- `netlify.toml` - Netlify build and deployment settings
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## Testing Checklist Before Deploy

- [ ] Run `npm run build` successfully
- [ ] Run `npm run lint` with no errors
- [ ] Run `npm run type-check` with no errors
- [ ] Test responsive design on mobile/tablet
- [ ] Test accessibility with keyboard navigation
- [ ] Check Core Web Vitals in Lighthouse
- [ ] Verify all links are working
- [ ] Check SEO metadata in page source

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Netlify Docs**: https://docs.netlify.com
- **MDN Web Docs**: https://developer.mozilla.org

---

Last Updated: February 2026
