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
- [2025-01-06] Migrating project from Figma to Replit environment
- [2025-01-06] Project has existing full-stack structure with modern dependencies

## User Preferences
- To be updated during migration process

## Development Guidelines
- Following fullstack_js development guidelines
- Client/server separation with security best practices
- Modern web application patterns
- Minimal backend focused on data persistence and API calls