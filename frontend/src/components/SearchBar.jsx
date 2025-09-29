import React, { useState } from 'react';
import { postsApi } from '../api';

const SearchBar = ({ onSearchResults, onClearSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchText.trim()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const results = await postsApi.searchPosts(searchText.trim());
      onSearchResults(results, searchText.trim());
    } catch (err) {
      setError('Search failed. Make sure your backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSearchText('');
    setError(null);
    onClearSearch();
  };

  return (
    <div className="search-bar">
      <h2>Search Posts</h2>
      
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search posts by text..."
            className="search-input"
          />
          <button 
            type="submit" 
            disabled={loading || !searchText.trim()}
            className="search-btn"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
          <button 
            type="button" 
            onClick={handleClear}
            className="clear-btn"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;