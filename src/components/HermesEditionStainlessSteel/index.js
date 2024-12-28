import React, { Component } from 'react';
import './index.css';

const hermesEditionStainlessSteel = [
  {
    type: "Polished Silver Stainless Steel",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735284474/712pN_flr2L._SL1500__pbvul5.jpg",
    description: "A luxurious and polished silver stainless steel finish, paired with exclusive Hermès bands for a sophisticated look.",
    price: "$1,249"
  },
  {
    type: "Space Black Stainless Steel",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735284528/61ykZG6XgUL._SL1500__omffeu.jpg",
    description: "A stunning space black stainless steel finish, complemented by high-quality Hermès bands for a modern, upscale appearance.",
    price: "$1,299"
  }
];

class HermesEditionStainlessSteel extends Component {
  render() {
    return (
      <div className="hermes-page">
        <h1>Hermès Edition Stainless Steel Collection</h1>
        <div className="product-grid">
          {hermesEditionStainlessSteel.map((item, index) => (
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

export default HermesEditionStainlessSteel;