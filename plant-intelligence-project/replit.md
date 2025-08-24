# Project Overview

## Project Type
Full-stack JavaScript application migrated from Figma to Replit

## Architecture
- **Frontend**: React with Vite, TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter for frontend routing
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library

## Project Structure
```
client/          # Frontend React application
  src/           # React components and pages
  index.html     # Main HTML file
server/          # Backend Express application  
  index.ts       # Server entry point
  routes.ts      # API routes
  storage.ts     # Storage interface
  vite.ts        # Vite integration
shared/          # Shared types and schemas
  schema.ts      # Drizzle schema definitions
```

## Recent Changes
- [2025-01-06] Successfully migrated project from Figma to Replit environment
- [2025-01-06] Fixed React Fragment warnings by replacing with span elements
- [2025-01-06] Improved responsive layout positioning in CoreFeaturesSection and MeetTheAISection
- [2025-01-06] Enhanced section spacing and mobile responsiveness across landing page
- [2025-01-06] Added proper padding and layout structure for better visual hierarchy
- [2025-01-06] Redesigned Core Features section with proper tab functionality and responsive cards
- [2025-01-06] Completely rebuilt footer (ImageWrapperSection) with responsive grid layout
- [2025-01-06] Rebuilt MeetTheAISection with curved yellow banner and 2x2 grid of green cards
- [2025-01-06] Fixed text color styling in MeetTheAISection to display proper black text
- [2025-01-06] Updated HowItWorksSection layout from vertical stacking to proper side-by-side arrangement

## User Preferences
- To be updated during migration process

## Development Guidelines
- Following fullstack_js development guidelines
- Client/server separation with security best practices
- Modern web application patterns
- Minimal backend focused on data persistence and API calls