# Cyber Log Pro

A modern cybersecurity log analysis and review dashboard. This application helps security professionals to track, analyze, and respond to security events detected by anomaly detection models.

## Overview

Cyber Log Pro provides a streamlined interface for security analysts to:

- View and analyze security log entries that have been flagged by detection models
- Review and classify security events as true or false positives
- Track statistics of reviewed logs
- Easily ingest and process new security logs

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **State Management**: Custom React hooks and client-side state
- **Routing**: Wouter for lightweight client-side routing
- **API Communication**: Tanstack React Query
- **CSS Framework**: Tailwind CSS with various UI component libraries

## Project Structure

```
cyber-log-pro/
├── client/                 # Frontend React application
│   └── src/
│       ├── components/     # Reusable UI components
│       │   └── ui/         # shadcn/ui components
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utility functions and types
│       ├── pages/          # Page components
│       ├── App.tsx         # Main application component
│       └── main.tsx        # Application entry point
├── server/                 # Express.js backend
│   ├── index.ts            # Server entry point and configuration
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Data storage utilities
│   └── vite.ts             # Vite configuration for server
└── shared/                 # Shared code between client and server
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/tkhongsap/cyber-log-pro.git
   ```

2. Install dependencies:
   ```
   cd cyber-log-pro
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. The application will be available at `http://localhost:5000`

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Update the database schema (when applicable)

## Features

- **Log Review Interface**: Intuitive cards for reviewing security events
- **Classification System**: Mark logs as true or false positives
- **Statistics Dashboard**: Track the number of reviewed logs
- **Notification System**: Get feedback on actions taken

## Project Status

Active development and contributions are welcome.

## Repository Information

This project is managed with Git and hosted on both GitHub and GitLab:

- GitHub: https://github.com/tkhongsap/cyber-log-pro.git
- GitLab: https://git.lab.tcctech.app/ds-and-ml-research-sandbox/research-repos/cybersecurity/cybersecuity-log-frontend.git
