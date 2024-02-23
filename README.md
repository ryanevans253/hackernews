# Hacker News Top 10

Hacker News Reader is a React application that fetches and displays top 10 stories from Hacker News. I built it with with React and TypeScript. I used React Query/Tanstack so that it will refetch the data in the background as the articles are updated, only if they have changed. This will prevent unnecessary rendering and avoids complicated state management. It provides automatic caching and will refetch when the browser window is refocused if the data is stale.

## Installation

Install with npm

```bash
  git clone https://github.com/ryanevans253/hackernews.git
  npm install my-project
  cd my-project
```

To run:

```bash
npm run dev
```

## Author

- [Ryan Evans](https://ryanevans.tech)

## Tech Stack

React, React Query/Tanstack, TypeScript, Vite
