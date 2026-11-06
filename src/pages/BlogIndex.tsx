import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../lib/posts';

export const BlogIndex: React.FC = () => {
  return (
    <div className="page-content">
      <header className="page-header">
        <h1>Latest Articles</h1>
        <p>Explore articles on React, Dynamic Routing, and Web Architecture.</p>
      </header>

      <div className="post-grid">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="post-card">
            <span className="post-date">{post.date}</span>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            {/* Dynamic slug route navigation link */}
            <Link to={`/blog/${post.slug}`} className="read-more-link">
              Read article &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};