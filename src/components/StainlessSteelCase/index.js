import React, { Component } from 'react';
import './index.css';

const stainlessSteelCase = [
  {
    type: "Silver Stainless Steel",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735282317/Apple-Watch-Series-8-Silver-Stainless-Steel-Case-with-White-Sport-Band_tpujnm.png",
    description: "A premium, polished stainless steel finish that offers durability and elegance.",
    price: "$699"
  },
  {
    type: "Gold Stainless Steel",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735282245/MKUU3_VW_34FRwatch-45-stainless-gold-cell-8s_VW_34FR_WF_CO_GEO_IN_atalat.jpg",
    description: "A luxurious gold finish that adds a touch of opulence to your wrist.",
    price: "$749"
  },
  {
    type: "Graphite Stainless Steel",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735282109/Apple-Watch-Series-8-Graphite-Stainless-Steel-Case-Sport-Band_bpcb3k.png",
    description: "A sleek and modern graphite finish for those who prefer a more subtle, stylish look.",
    price: "$699"
  }
];

class StainlessSteelCase extends Component {
  render() {
    return (
      <div className="stainless-steel-case-page">
        <h1>Stainless Steel Case Collection</h1>
        <div className="product-grid">
          {stainlessSteelCase.map((item, index) => (
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

export default StainlessSteelCase;