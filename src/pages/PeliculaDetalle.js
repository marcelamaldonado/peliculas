import React from 'react'

class PeliculaDetalle extends React.Component{
  componentDidMount(){
      console.log(this.props.match.params.peliculaid)
  }

    render(){
        return(
            <div>Detalle de Peliculas</div>
        );
    }
}

export default PeliculaDetalle