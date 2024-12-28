import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AluminumCase from './components/AluminumCase';
import StainlessSteelCase from './components/StainlessSteelCase';
import TitaniumCase from './components/TitaniumCase';
import HermesEditionStainlessSteel from './components/HermesEditionStainlessSteel';
import NikeEditionAluminumCase from './components/NikeEditionAluminumCase';
import UltraTitaniumCase from './components/UltraTitaniumCase';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aluminumCase" element={<AluminumCase />} />
            <Route path="/stainlessSteelCase" element={<StainlessSteelCase />} />
            <Route path="/titaniumCase" element={<TitaniumCase />} />
            <Route path="/hermesEditionStainlessSteel" element={<HermesEditionStainlessSteel />} />
            <Route path="/nikeEditionAluminumCase" element={<NikeEditionAluminumCase />} />
            <Route path="/ultraTitaniumCase" element={<UltraTitaniumCase />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
