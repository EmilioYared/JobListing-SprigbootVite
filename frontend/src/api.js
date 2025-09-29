import axios from 'axios';

// Use environment variable for API base URL, fallback to empty string for proxy
const API_BASE = import.meta.env.VITE_API_BASE || '';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions for backend communication
export const postsApi = {
  // GET /posts - fetch all posts
  getAllPosts: async () => {
    try {
      const response = await api.get('/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  // GET /posts/{text} - search posts by text
  searchPosts: async (searchText) => {
    try {
      const response = await api.get(`/posts/${encodeURIComponent(searchText)}`);
      return response.data;
    } catch (error) {
      console.error('Error searching posts:', error);
      throw error;
    }
  },

  // POST /post - create a new post
  createPost: async (postData) => {
    try {
      const response = await api.post('/post', postData);
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },
};

export default api;