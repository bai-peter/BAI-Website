# BAI Website

A professional, institutional-grade website for **BAI Funds (Bai Awan Investments)** - a quantitative hedge fund that uses artificial intelligence to systematically detect and trade against human behavioral errors in financial markets.

🌐 **Live Site**: [baifunds.com](https://baifunds.com)

## 🏗️ Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui + Radix UI primitives
- **Routing**: React Router DOM 6.26.2
- **State Management**: TanStack Query 5.56.2
- **Animations**: Custom FadeIn component with Intersection Observer
- **Deployment**: GitHub Pages with custom domain

### Project Structure
```
src/
├── components/           # React components
│   ├── animations/      # Custom animation components
│   ├── ui/             # shadcn/ui component library
│   ├── Header.tsx      # Navigation with smooth scrolling
│   ├── Hero.tsx        # Hero section with video background
│   ├── Manifesto.tsx   # Investment thesis and philosophy
│   ├── Gap.tsx         # Investment strategy section
│   ├── TechnologyPlatform.tsx  # BAI Tech platform showcase
│   ├── FoundersInSearch.tsx    # Team and leadership
│   ├── About.tsx       # Company information
│   ├── Community.tsx   # Community engagement
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🎨 Design System

### Visual Identity
- **Theme**: Dark, institutional aesthetic
- **Typography**: Inter font family with serif headings
- **Color Palette**: 
  - Background: Pure black (`#000000`)
  - Foreground: White smoke (`#F5F5F5`)
  - Accents: Battleship gray (`#969696`)
- **Animations**: Scroll-triggered fade-in effects with staggered delays

### Key Features
- **Video Background**: Professional office video in hero section
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Scrolling**: Anchor navigation with offset for fixed header
- **Performance Optimized**: Lazy loading, code splitting, asset optimization
- **SEO Ready**: Comprehensive meta tags, Open Graph, structured data

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup
```bash
# Clone repository
git clone https://github.com/bai-peter/BAI-Website.git
cd BAI-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server (port 8080)
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Development Server
- **URL**: http://localhost:8080
- **Hot Reload**: Enabled
- **TypeScript**: Full type checking

## 📦 Dependencies

### Core Dependencies
- **React 18.3.1** - UI framework
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.1** - Build tool and dev server
- **Tailwind CSS 3.4.11** - Utility-first CSS framework

### UI & Styling
- **shadcn/ui** - Component library built on Radix UI
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **Tailwind Animate** - Animation utilities

### State & Data
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Build & Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🌐 Deployment

### GitHub Pages
- **Repository**: `bai-peter/BAI-Website`
- **Branch**: `main` (auto-deploy)
- **Custom Domain**: `baifunds.com`
- **SSL**: Enabled via GitHub Pages

### Build Configuration
- **Base Path**: `/` (root domain)
- **Asset Optimization**: Hash-based cache busting
- **Target**: ES2015 for broad compatibility
- **Source Maps**: Disabled for production

### SEO Implementation
- **Meta Tags**: Comprehensive title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

### Mobile Features
- **Hamburger Menu**: Collapsible navigation
- **Touch Optimized**: Proper touch targets
- **Performance**: Optimized for mobile networks

## 🎯 Performance

### Optimization Features
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Image and video compression
- **Lazy Loading**: Components load on demand
- **Cache Busting**: Hash-based asset versioning
- **Bundle Analysis**: Vite bundle analyzer

### Core Web Vitals
- **LCP**: Optimized for Largest Contentful Paint
- **FID**: Minimized First Input Delay
- **CLS**: Prevented Cumulative Layout Shift

## 🔧 Configuration Files

### Key Configuration
- `vite.config.ts` - Build and development configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Dependencies and scripts
- `components.json` - shadcn/ui configuration

### Environment
- **Development**: Hot reload, source maps
- **Production**: Minified, optimized assets
- **Build Target**: Modern browsers (ES2015+)

## 📊 Analytics & Monitoring

### SEO Tools
- **Google Search Console**: Site verification and monitoring
- **Sitemap**: XML sitemap for search engine discovery
- **Meta Tags**: Comprehensive SEO meta data

### Performance Monitoring
- **Core Web Vitals**: Google PageSpeed Insights
- **Bundle Size**: Vite build analysis
- **Load Times**: Real user monitoring

## 🛠️ Maintenance

### Regular Updates
- **Dependencies**: Keep packages updated
- **Security**: Monitor for vulnerabilities
- **Performance**: Regular performance audits
- **SEO**: Monitor search rankings and traffic

### Development Workflow
- **Version Control**: Git with feature branches
- **Code Quality**: ESLint + TypeScript
- **Testing**: Manual testing across devices
- **Deployment**: Automated via GitHub Actions

## 📄 License

This project is proprietary to BAI Funds (Bai Awan Investments).

## 🤝 Contributing

This is a private repository. For internal development:
1. Create feature branches from `main`
2. Follow TypeScript and ESLint guidelines
3. Test across multiple devices and browsers
4. Submit pull requests for review

---

**Last Updated**: January 7, 2025  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
