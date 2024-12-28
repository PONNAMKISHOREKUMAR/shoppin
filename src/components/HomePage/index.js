import { Component } from 'react';
import {Link} from 'react-router-dom'
import WatchCard from '../WatchCard'
import { FaApple } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import './index.css'

class HomePage extends Component {
    render() {
      return (
        <div className="homepage">
          <div className='header-cont'>
          <FaApple className='icon' />
          <h1>Apple Watch Store</h1>
          <FaCartArrowDown className='icon' />
          </div>
        
          <div className="buttons">
            <Link to="/aluminumCase" className="button">AluminumCase</Link>
            <Link to="/stainlessSteelCase" className="button">StainlessSteelCase</Link>
            <Link to="/titaniumCase" className="button">TitaniumCase</Link>
            <Link to="/hermesEditionStainlessSteel" className="button">HermesEdition</Link>
            <Link to="/nikeEditionAluminumCase" className="button">NikeEdition</Link>
            <Link to='/ultraTitaniumCase' className="button">UltraTitaniumCase</Link>
          </div>
          <div className='carousel-cont'>
          <WatchCard/>
          </div>
         
        </div>
      );
    }
  }
  
  export default HomePage;