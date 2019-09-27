import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import PeliculaDetalle from '../pages/PeliculaDetalle'
import Header from './Header'
import Footer from './Footer'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={HomePage} />
          <Route path="/detalles/:peliculaid" component={PeliculaDetalle} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
