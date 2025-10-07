# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for the Sacramento Polytechnic website with TypeScript, Tailwind CSS, and shadcn/ui components. The application includes Firebase Genkit AI integration for enhanced functionality.

## Development Commands

- `npm run dev` - Start development server with Turbopack on port 9002
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## AI Development Commands

- `npm run genkit:dev` - Start Firebase Genkit development server
- `npm run genkit:watch` - Start Genkit with file watching

## Architecture

### Component Structure
- **Page Components**: Located in `src/components/polytech/` - Contains main sections like header, hero-section, content-blocks, testimonials, footer
- **UI Components**: Located in `src/components/ui/` - shadcn/ui component library with Radix UI primitives
- **Layout**: Standard Next.js app router structure in `src/app/`

### Key Technologies
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **UI Library**: shadcn/ui components with Radix UI primitives
- **AI Integration**: Firebase Genkit with Google AI (Gemini 2.5 Flash model)
- **State Management**: React hooks (`use-toast`, `use-mobile`)
- **Icons**: Lucide React icons

### Configuration
- **Path Aliases**: `@/*` maps to `src/*`
- **Image Domains**: Configured for placehold.co, images.unsplash.com, and picsum.photos
- **Build Settings**: TypeScript and ESLint errors are ignored during builds

### Styling System
- Uses CSS variables for theming with HSL color format
- Custom animations: accordion, fade-in-up
- Font stack: Inter for body and headlines, monospace for code
- Supports dark mode via class-based toggling

## Important Notes

- The project uses strict TypeScript but ignores build errors in Next.js config
- All images must be from approved remote domains or local assets
- Component imports use absolute paths with `@/` prefix
- The AI functionality is configured to use Google's Gemini model through Firebase Genkit