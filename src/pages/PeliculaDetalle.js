import React from 'react'
import axios from 'axios'
import Destaque from '../componentes/Destaque'

class PeliculaDetalle extends React.Component{
    state= {
        pelicula:""
    }
  componentDidMount(){
      const {peliculaid} = this.props.match.params
      this.getPeliculaDetalle(peliculaid)
        }
getPeliculaDetalle = async (peliculaid)=>{
    try{
        const result = await axios.get(`https://api.themoviedb.org/3/movie/${peliculaid}?api_key=55d164ce66617c1ee8737338b2ee97f4&language=es`)
        this.setState({
            pelicula:result.data
        }) 
    } catch (error) {
        console.log(error.message)
    }
}
    render(){
        return(
            <div>
                <Destaque pelicula={this.state.pelicula}></Destaque>
            </div>
        );
    }
}

export default PeliculaDetalle