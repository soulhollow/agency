// src/pages/ProfilePage/ProfilePage.js
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext'; // Import the authentication context
import './ProfilePage.css';

function ProfilePage() {
  const { isAuthenticated } = useContext(AuthContext); // Get authentication state
  const [purchases, setPurchases] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch purchases when component mounts
      fetchUserPurchases();
    }
  }, [isAuthenticated]);

  const fetchUserPurchases = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/purchases', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token for authentication
        },
      });

      const data = await response.json();
      if (response.ok) {
        setPurchases(data.purchases); // Assuming your API returns an array of purchases
      } else {
        setError(data.message || 'Failed to load purchases.');
      }
    } catch (err) {
      setError('An error occurred while fetching purchases.');
    }
  };

  if (!isAuthenticated) {
    return <p>You need to log in to view your purchases.</p>;
  }

  return (
    <div className="profile-page">
      <h2>Your Purchases</h2>
      {error && <p className="error-message">{error}</p>}
      <ul className="purchase-list">
        {purchases.map((purchase) => (
          <li key={purchase.id} className="purchase-item">
            <p><strong>Item:</strong> {purchase.itemName}</p>
            <p><strong>Price:</strong> ${purchase.price}</p>
            <p><strong>Date:</strong> {new Date(purchase.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;
