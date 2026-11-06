// Type definition for an individual blog post item
export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  content: string;
  summary: string;
  date: string;
}

// Type definition for our authentication context state and actions
export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}