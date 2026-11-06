import type { BlogPostItem } from '../types';

// In-memory mock blog post data repository
export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: '1',
    slug: 'getting-started-with-react-router',
    title: 'Getting Started with React Router',
    summary: 'Learn how modern single page apps navigate without refreshing the page.',
    content:
      'React Router enables dynamic, client-side routing. By mapping URLs to component trees, we provide fluid user transitions without round-trip browser requests.',
    date: 'March 10, 2026',
  },
  {
    id: '2',
    slug: 'understanding-context-api',
    title: 'Understanding React Context API',
    summary: 'A deep dive into ambient state management and avoiding prop drilling.',
    content:
      'Context API provides a way to pass data through the component tree without having to pass props down manually at every single intermediate level.',
    date: 'March 15, 2026',
  },
  {
    id: '3',
    slug: 'mastering-protected-routes',
    title: 'Mastering Protected Routes in React',
    summary: 'How to protect private user areas using conditional routing redirects.',
    content:
      'A protected route checks if the current user session is authorized. Unauthenticated users get safely redirected back to the login page.',
    date: 'March 20, 2026',
  },
];