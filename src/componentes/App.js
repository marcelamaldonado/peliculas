import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import PeliculaDetalle from '../pages/PeliculaDetalle'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/detalles" component={PeliculaDetalle}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
