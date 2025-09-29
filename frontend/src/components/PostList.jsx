import React, { useState, useEffect } from 'react';
import { postsApi } from '../api';

const PostList = ({ posts, setPosts, searchResults, isSearchMode }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all posts on component mount
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await postsApi.getAllPosts();
      setPosts(data);
    } catch (err) {
      setError('Failed to fetch posts. Make sure your backend is running on port 3001.');
    } finally {
      setLoading(false);
    }
  };

  const displayPosts = isSearchMode ? searchResults : posts;

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="post-list">
      <div className="post-list-header">
        <h2>{isSearchMode ? `Search Results (${searchResults.length})` : `All Posts (${posts.length})`}</h2>
        {!loading && (
          <button onClick={fetchAllPosts} className="refresh-btn">
            Refresh
          </button>
        )}
      </div>

      {displayPosts.length === 0 ? (
        <p className="no-posts">
          {isSearchMode ? 'No posts found for your search.' : 'No posts available. Create one below!'}
        </p>
      ) : (
        <div className="posts-grid">
          {displayPosts.map((post, index) => (
            <div key={index} className="post-card">
              <div className="post-header">
                <h3 className="post-profile">{post.profile}</h3>
                <span className="post-exp">{post.exp} years exp</span>
              </div>
              <p className="post-desc">{post.desc}</p>
              <div className="post-techs">
                {post.techs && post.techs.length > 0 ? (
                  post.techs.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))
                ) : (
                  <span className="no-techs">No technologies listed</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;