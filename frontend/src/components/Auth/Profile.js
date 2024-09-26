import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
         
        </div>
      ) : (
        <p>Please log in to see your profile information.</p>
      )}
    </div>
  );
};

export default Profile;
