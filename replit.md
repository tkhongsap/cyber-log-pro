# Cybersecurity Log Review Dashboard

## Overview

This application is a Cybersecurity Log Review Dashboard that enables security analysts to review and triage potential security incidents. The application features a modern React frontend with a Node.js/Express backend. It uses Drizzle ORM for database interactions and follows a client-server architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with React (18+) and uses the following key technologies:

- **UI Framework**: A comprehensive component library based on Radix UI primitives with the shadcn/ui design system
- **State Management**: React hooks and React Query for API data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom dark theme focused on readability
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture

The backend is a Node.js application built with Express that provides:

- **API Layer**: RESTful endpoints for log data
- **Database Abstraction**: Drizzle ORM for database interactions
- **Authentication**: Basic infrastructure for user authentication (partially implemented)
- **Static Asset Serving**: Express middleware to serve the frontend in production

### Data Storage

- **Database**: PostgreSQL (via Neon Serverless)
- **ORM**: Drizzle for type-safe database operations
- **Schema**: Defined in `shared/schema.ts` with tables for users and logs
- **Data Validation**: Zod schema validation for input/output data

## Key Components

### Frontend Components

1. **Log Card** (`LogCard.tsx`): Displays individual security logs with detailed information and review actions
2. **Log Statistics** (`LogStatistics.tsx`): Shows metrics on reviewed logs, true/false positives
3. **Header** (`Header.tsx`): Application header with controls for log ingestion
4. **Empty State** (`EmptyState.tsx`): UI for when no logs are available
5. **Notification** (`Notification.tsx`): Toast-style notifications for user feedback
6. **UI Components**: Extensive library of UI components (buttons, cards, dialogs, etc.)

### Backend Components

1. **Express Server** (`server/index.ts`): Main server entry point
2. **Routes** (`server/routes.ts`): API endpoint definitions
3. **Storage** (`server/storage.ts`): Data storage abstraction layer
4. **Vite Integration** (`server/vite.ts`): Development server integration

### Shared Components

1. **Database Schema** (`shared/schema.ts`): Defines database tables and relationships
2. **Types** (`client/src/lib/types.ts`): Shared TypeScript interfaces

## Data Flow

1. **Log Ingestion**:
   - In the current implementation, logs are simulated using the "Simulate Incoming Log" button
   - The frontend generates random log data and displays it for review
   - Future implementation will likely fetch logs from the `/api/logs` endpoint

2. **Log Review Process**:
   - Analysts review logs displayed in LogCard components
   - Each log can be marked as a True Positive or False Positive
   - Statistics are updated in real-time
   - Notifications provide feedback on actions

3. **Database Interactions**:
   - Backend provides API endpoints for data retrieval and storage
   - Drizzle ORM handles the translation between API requests and database operations
   - Schema validation ensures data integrity

## External Dependencies

### Frontend Dependencies

- **@radix-ui/react-**: UI primitives for accessible components
- **@tanstack/react-query**: Data fetching and caching
- **class-variance-authority**: Component styling variations
- **clsx**: Conditional class name construction
- **wouter**: Client-side routing
- **tailwindcss**: Utility-first CSS framework

### Backend Dependencies

- **express**: Web server framework
- **drizzle-orm**: SQL ORM
- **@neondatabase/serverless**: PostgreSQL client for serverless environments
- **zod**: Schema validation

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

1. **Development Mode**:
   - `npm run dev` starts both server and client in development mode
   - Vite handles hot module reloading for the client
   - Express serves the API endpoints

2. **Production Build**:
   - `npm run build` creates optimized production builds of both client and server
   - Client assets are built to `dist/public`
   - Server is bundled to `dist/index.js`

3. **Production Runtime**:
   - `npm run start` runs the production server
   - Express serves static assets from the `dist/public` directory
   - API endpoints are available under the `/api` path

4. **Database Management**:
   - `npm run db:push` updates the database schema using Drizzle Kit

The deployment is configured to auto-scale and includes proper port configuration for Replit.

## Getting Started

1. The database needs to be provisioned with the `DATABASE_URL` environment variable set.
2. Run `npm run db:push` to initialize the database schema.
3. Start the development server with `npm run dev`.
4. Access the application through the provided port (default 5000).

## Implementation Notes

1. The current implementation uses a memory-based storage service, but the database schema is defined for PostgreSQL.
2. Authentication is partially implemented but not fully integrated.
3. The log review functionality is currently client-side only and doesn't persist between sessions.

## Future Enhancements

1. Complete the integration with PostgreSQL for persistent storage
2. Implement proper authentication and authorization
3. Add filtering and search capabilities for logs
4. Implement real-time log ingestion from external sources
5. Add user management and role-based access control