# tPolls - Telegram/TON Polling Application

## Overview

tPolls is a Telegram mini-app built for incentivized polling on the TON blockchain. The application consists of a React frontend with a modern landing page and an Express.js backend, designed to create engaging polls with token rewards for participants.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **State Management**: TanStack React Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Development**: Hot reload with Vite integration in development mode
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)

### Key Components

#### Landing Page
The main interface is a production-ready landing page featuring:
- Hero section with animated background elements
- Problem statement highlighting low poll response rates
- Three-step "How It Works" section
- Feature showcase with gamification, token rewards, anti-bot mechanisms
- Demo section with horizontal scrolling screenshots
- Community engagement section with social links

#### Database Schema
- User management with username/password authentication
- Extensible schema design for future poll and response entities
- PostgreSQL with UUID primary keys and proper constraints

#### UI Component System
- Complete Shadcn/ui component library
- Consistent design system with CSS custom properties
- Responsive design patterns for desktop, tablet, and mobile
- Accessible components using Radix UI primitives

## Data Flow

1. **Frontend Rendering**: Vite serves the React application with hot module replacement
2. **API Communication**: TanStack React Query handles server state with automatic caching
3. **Database Operations**: Drizzle ORM provides type-safe database queries
4. **Authentication**: Session-based authentication with PostgreSQL session storage
5. **Development**: Integrated development server with error overlays and debugging tools

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript support
- Express.js for backend API
- Drizzle ORM with PostgreSQL dialect
- Neon Database for serverless PostgreSQL hosting

### UI and Animation Libraries
- Radix UI primitives for accessible components
- Framer Motion for animations
- Tailwind CSS for styling
- Lucide React for icons

### Development Tools
- Vite for build tooling and development server
- ESBuild for backend compilation
- TypeScript for type safety
- Replit-specific plugins for development environment integration

### Blockchain Integration (Planned)
- TON blockchain integration for token rewards
- Telegram mini-app SDK for native Telegram features

## Deployment Strategy

### Development Environment
- Vite development server with HMR for frontend
- Express server with TypeScript compilation via tsx
- Environment variable configuration for database connection
- Integrated error handling and logging

### Production Build
1. Frontend assets built with Vite and output to `dist/public`
2. Backend compiled with ESBuild to `dist/index.js`
3. Single Node.js process serves both static assets and API routes
4. Database migrations managed through Drizzle Kit

### Environment Configuration
- DATABASE_URL environment variable required for PostgreSQL connection
- NODE_ENV for environment-specific behavior
- Session secrets and API keys managed through environment variables

### Scaling Considerations
- Serverless-ready architecture with Neon Database
- Stateless backend design for horizontal scaling
- CDN-ready static asset generation
- Connection pooling for database efficiency

The application is designed as a modern full-stack TypeScript application with a focus on developer experience, type safety, and production readiness for the Telegram/TON ecosystem.