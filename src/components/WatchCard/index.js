import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

class WatchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWatch: null, 
    };
  }

  handleWatchClick = (watch) => {
    this.setState({ selectedWatch: watch });
  };

  render() {
    const { selectedWatch } = this.state;

    const watchCategories = [
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
      },
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
      },
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
      },
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
      },
      {
          type: "Silver Aluminum",
          imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735356634/Apple-Watch-Nike-Series-4-Silver-44mm-GPS-CEL_hvavgo.jpg",
          description: "A lightweight, athletic design with a polished silver aluminum finish, tailored for an active lifestyle.",
          price: "$399"
      },
      {
          type: "Midnight Aluminum",
          imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735284346/61DZqkRroTL._SL1000__svv0qg.jpg",
          description: "A dark, stylish finish with a focus on performance, perfect for those who value both form and function.",
          price: "$399"
      },
      {
          type: "Natural Titanium",
          imageUrl: "https://res.cloudinary.com/da3mrj5uf/image/upload/v1735284356/MXKC3ref_VW_34FR_watch-case-49-titanium-natural-ultra2_VW_34FR_watch-face-49-milanese-ultra2_VW_34FR_ya6kgy.jpg",
          description: "A rugged, lightweight titanium finish built for extreme sports and outdoor adventures, offering premium durability.",
          price: "$799"
      }
  ];
  

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    if (selectedWatch) {
      // Display only the selected watch details
      return (
        <div className="watch-details">
          <img src={selectedWatch.imageUrl} alt={selectedWatch.type} />
          <h3>{selectedWatch.type}</h3>
          <p>{selectedWatch.description}</p>
          <p>{selectedWatch.price}</p>
          <button onClick={() => this.setState({ selectedWatch: null })}>Back to Carousel</button>
        </div>
      );
    }

    return (
      <div className="watch-card-container">
        <Slider {...settings}>
          {watchCategories.map((watch, index) => (
            <div key={index} className="watch-card" onClick={() => this.handleWatchClick(watch)}>
              <img src={watch.imageUrl} alt={watch.type} />
              <h3>{watch.type}</h3>
              <p>{watch.description}</p>
              <p>{watch.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default WatchCard;
