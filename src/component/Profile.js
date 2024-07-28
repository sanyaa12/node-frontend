import React from 'react';
import './Profile.css';

const Profile = () => {
  // Mock user data for demonstration
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Web developer with a passion for creating amazing user experiences.',
    avatar: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <h2>{user.name}</h2>
        <p className="profile-email">{user.email}</p>
      </div>
      <div className="profile-bio">
        <h3>Bio</h3>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;

