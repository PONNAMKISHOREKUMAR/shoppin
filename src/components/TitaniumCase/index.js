import React, { Component } from 'react';
import './index.css';

const titaniumCase = [
  {
    type: "Natural Titanium",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735282504/mx4f3ks-a_7_mzkof0.jpg",
    description: "A durable yet lightweight titanium finish that offers strength and a refined look.",
    price: "$799"
  },
  {
    type: "Space Black Titanium",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735282575/MYPD3ref_VW_34FR_watch-case-49-titanium-black-ultra2_VW_34FR_watch-face-49-ocean-ultra2_VW_34FR_GEO_IN_npzm0k.jpg",
    description: "A sleek and bold space black titanium finish, designed for a premium and modern aesthetic.",
    price: "$849"
  }
];

class TitaniumCase extends Component {
  render() {
    return (
      <div className="titanium-case-page">
        <h1>Titanium Case Collection</h1>
        <div className="product-grid">
          {titaniumCase.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.imageUrl} alt={item.type} className="product-image" />
              <h2>{item.type}</h2>
              <p>{item.description}</p>
              <p className="product-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TitaniumCase;