import React, { Component } from 'react';
import './index.css';

const nikeEditionAluminumCase = [
  {
    type: "Silver Aluminum",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735284197/51IlGni9GWL._SL1000__iwyibg.jpg",
    description: "A lightweight, athletic design with a polished silver aluminum finish, tailored for an active lifestyle.",
    price: "$399"
  },
  {
    type: "Midnight Aluminum",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735284346/61DZqkRroTL._SL1000__svv0qg.jpg",
    description: "A dark, stylish finish with a focus on performance, perfect for those who value both form and function.",
    price: "$399"
  }
];

class NikeEditionAluminumCase extends Component {
  render() {
    return (
      <div>
        <h1>Nike Edition Aluminum Case</h1>
        <div className="case-container">
          {nikeEditionAluminumCase.map((item, index) => (
            <div key={index} className="case-item">
              <img src={item.imageUrl} alt={item.type} className="case-image" />
              <h2>{item.type}</h2>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NikeEditionAluminumCase;