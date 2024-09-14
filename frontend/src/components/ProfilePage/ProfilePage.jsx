import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext'; // Import the authentication context
import apiServiceInstance from '../../context/ApiService'; // Import the ApiService
import './ProfilePage.css';

function ProfilePage() {
  const { isAuthenticated } = useContext(AuthContext); // Get authentication state
  const [purchases, setPurchases] = useState([]);
  const [error, setError] = useState('');
 

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserIdAndPurchases(); // Fetch userId and then purchases
    }
  }, [isAuthenticated]);

  const fetchUserIdAndPurchases = async () => {
    try {
      // Zuerst Benutzerinformationen abfragen
      const userResponse = await apiServiceInstance.getCurrentUser();
      const userId = userResponse.data.id; // assuming user ID is returned as `id`
     

      // Dann Bestellungen des Nutzers abrufen
      const orderResponse = await apiServiceInstance.getOrdersByUserId(userId);
      if (orderResponse.status === 200) {
        setPurchases(orderResponse.data); // Assuming the API returns an array of purchases
      } else {
        setError('Failed to load purchases.');
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
