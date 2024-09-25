import React, { useState, useEffect } from 'react';
import './BuyPage.css';
import apiService from '../../services/ApiService'; // Passen Sie den Pfad an

function ProductOptionsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Ladezustand
  const [error, setError] = useState(null); // Fehlerzustand

  useEffect(() => {
    apiService.getAllProducts()
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fehler beim Abrufen der Produkte:', err);
        setError('Produkte konnten nicht geladen werden.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Produkte werden geladen...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="product-options-section">
      <h2>Wählen Sie Ihren AI Agent Plan</h2>
      <div className="pricing-table">
        {products.map(product => (
          <div key={product.id} className="option-card">
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <ul className="features-list">
              {product.features && product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {product.name.toLowerCase() !== 'enterprise' ? (
              <button className="buy-button">Jetzt kaufen</button>
            ) : (
              <button className="buy-button">Vertrieb kontaktieren</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductOptionsSection;
