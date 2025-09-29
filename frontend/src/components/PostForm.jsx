import React, { useState } from 'react';
import { postsApi } from '../api';

const PostForm = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    profile: '',
    desc: '',
    exp: '',
    techs: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Prepare the data for the API
      const postData = {
        profile: formData.profile.trim(),
        desc: formData.desc.trim(),
        exp: parseInt(formData.exp) || 0,
        techs: formData.techs
          .split(',')
          .map(tech => tech.trim())
          .filter(tech => tech.length > 0)
      };

      // Validate required fields
      if (!postData.profile || !postData.desc) {
        throw new Error('Profile and description are required');
      }

      await postsApi.createPost(postData);
      
      // Reset form
      setFormData({
        profile: '',
        desc: '',
        exp: '',
        techs: ''
      });
      
      setSuccess(true);
      
      // Notify parent component to refresh the posts list
      if (onPostCreated) {
        onPostCreated();
      }

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
      
    } catch (err) {
      setError(err.message || 'Failed to create post. Check your backend connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-form">
      <h2>Create New Post</h2>
      
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Post created successfully!</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profile">Profile Name *</label>
          <input
            type="text"
            id="profile"
            name="profile"
            value={formData.profile}
            onChange={handleInputChange}
            placeholder="Enter profile name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="desc">Description *</label>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleInputChange}
            placeholder="Enter post description"
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="exp">Experience (years)</label>
          <input
            type="number"
            id="exp"
            name="exp"
            value={formData.exp}
            onChange={handleInputChange}
            placeholder="0"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="techs">Technologies</label>
          <input
            type="text"
            id="techs"
            name="techs"
            value={formData.techs}
            onChange={handleInputChange}
            placeholder="React, JavaScript, Node.js (comma separated)"
          />
          <small>Separate multiple technologies with commas</small>
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default PostForm;