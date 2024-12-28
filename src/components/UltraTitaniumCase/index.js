import React, { Component } from 'react';
import './index.css';

const ultraTitaniumCase = [
  {
    type: "Natural Titanium",
    imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735284356/MXKC3ref_VW_34FR_watch-case-49-titanium-natural-ultra2_VW_34FR_watch-face-49-milanese-ultra2_VW_34FR_ya6kgy.jpg",
    description: "A rugged, lightweight titanium finish built for extreme sports and outdoor adventures, offering premium durability.",
    price: "$799"
  }
];

class UltraTitaniumCase extends Component {
  render() {
    return (
      <div>
        <h1>Ultra Titanium Case</h1>
        <div className="case-container">
          {ultraTitaniumCase.map((item, index) => (
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

export default UltraTitaniumCase;
