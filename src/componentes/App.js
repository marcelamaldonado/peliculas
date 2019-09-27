import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {updateFecha} from '../redux/actions/testActions'
import HomePage from '../pages/HomePage'
import PeliculaDetalle from '../pages/PeliculaDetalle'
import Header from './Header'
import Footer from './Footer'
class App extends Component {
  componentDidMount(){
   setInterval(this.props.updateFecha,1000) //funcion para que se ejecute cada segundo
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header fecha={this.props.test.fecha}/>
          <Route exact path="/" component={HomePage} />
          <Route path="/detalles/:peliculaid" component={PeliculaDetalle} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStatetoProps({test}){
  return{test}
}


export default connect(mapStatetoProps,{
       updateFecha    //metodos de generaciones de acciones que vamos a pasar como propiedades
} )(App);
