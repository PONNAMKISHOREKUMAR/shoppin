import React, { Component } from 'react';
import './index.css';

const aluminumCase = [
  {
    type: "Silver Aluminum",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735281933/se-case-connectivity-select-202409-silver-44mm-gps_GEO_IN_t5c6fd.jpg",
    description: "A sleek and lightweight watch with a polished silver finish, perfect for everyday wear.",
    price: "$399"
  },
  {
    type: "Midnight Aluminum",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735281848/se-case-connectivity-select-202409-midnight-44mm-gps_GEO_IN_k0n2mz.jpg",
    description: "A modern and dark variant with a deep midnight finish, offering both style and sophistication.",
    price: "$399"
  },
  {
    type: "Starlight Aluminum",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735281911/se-case-connectivity-select-202409-starlight-44mm-gps_GEO_IN_ypn2lz.jpg",
    description: "A beautiful blend of silver and gold with a starlight finish, providing a subtle yet luxurious appearance.",
    price: "$399"
  }
];

class AluminumCase extends Component {
  render() {
    return (
      <div className="aluminum-case-page">
        <h1>Aluminum Case Collection</h1>
        <div className="product-grid">
          {aluminumCase.map((item, index) => (
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

export default AluminumCase;