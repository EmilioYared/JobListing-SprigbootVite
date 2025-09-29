import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search results
  const handleSearchResults = (results, query) => {
    setSearchResults(results);
    setSearchQuery(query);
    setIsSearchMode(true);
  };

  // Handle clearing search
  const handleClearSearch = () => {
    setSearchResults([]);
    setSearchQuery('');
    setIsSearchMode(false);
  };

  // Handle post creation (refresh the posts list)
  const handlePostCreated = () => {
    // PostList component will automatically refresh
    // If we were in search mode, we might want to stay there or clear it
    // For now, let's clear the search to show the new post
    if (isSearchMode) {
      handleClearSearch();
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Posts Management System</h1>
        <p>Connect to Spring Boot Backend on localhost:3001</p>
      </header>

      <main className="app-main">
        <div className="app-section">
          <SearchBar 
            onSearchResults={handleSearchResults}
            onClearSearch={handleClearSearch}
          />
          
          {isSearchMode && (
            <div className="search-info">
              <p>
                Showing results for: <strong>"{searchQuery}"</strong>
                <button onClick={handleClearSearch} className="link-btn">
                  View all posts
                </button>
              </p>
            </div>
          )}
        </div>

        <div className="app-section">
          <PostList 
            posts={posts}
            setPosts={setPosts}
            searchResults={searchResults}
            isSearchMode={isSearchMode}
          />
        </div>

        <div className="app-section">
          <PostForm onPostCreated={handlePostCreated} />
        </div>
      </main>

      <footer className="app-footer">
        <p>Make sure your Spring Boot backend is running on http://localhost:3001</p>
      </footer>
    </div>
  );
}

export default App;
