# Echo AI Agent

## Features

- **Dashboard:** Real-time metrics and activity feed
- **Chat Widget:** AI-powered chat interface with typing indicators and source citations
- **Conversations:** Searchable conversation history with filtering
- **Knowledge Sources:** Manageable knowledge base for the AI to reference
- **Settings:** Configurable AI behavior settings
- **Source Citation System:** Transparent referencing of knowledge sources

## Key Technical Implementation

- **Source Scanning Animation:** Visual indication when Fin is looking through knowledge sources
- **Inline Citations:** Superscript numbers referencing sources
- **Contextual Source Popups:** Tooltips showing where information was sourced from
- **Responsive Design:** Full support for desktop and mobile devices
- **Dark/Light Mode:** Automatic theme detection plus toggle option

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **State Management:** React hooks + Zustand
- **UI Components:** Custom components with Headless UI
- **Notifications:** React Hot Toast

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Folder Structure

```
/src
  /app - Next.js app router pages 
  /components - Reusable components
    /Chat - Chat widget and messaging components
    /Dashboard - Dashboard cards and metrics
    /Layout - Layout components (sidebar, header)
    /UI - Reusable UI components
  /data - Dummy data for the application
  /store - State management
  /utils - Utility functions
```

## Screenshots

(See `/to-be-made` folder for reference images)

## License

MIT
