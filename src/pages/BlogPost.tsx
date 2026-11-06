import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../lib/posts';

export const BlogPost: React.FC = () => {
  // Extract dynamic route parameter :slug from current URL
  const { slug } = useParams<{ slug: string }>();

  // Look up corresponding post in mock database
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // If slug doesn't match any record, display fallback error state
  if (!post) {
    return (
      <div className="page-content error-container">
        <h2>Post not found</h2>
        <p>We could not find an article with the URL parameter: <code>{slug}</code></p>
        <Link to="/blog" className="btn-primary">
          Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <article className="page-content post-detail">
      <Link to="/blog" className="back-link">
        &larr; Back to articles
      </Link>
      <header className="post-detail-header">
        <span className="post-date">{post.date}</span>
        <h1>{post.title}</h1>
      </header>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
    </article>
  );
};