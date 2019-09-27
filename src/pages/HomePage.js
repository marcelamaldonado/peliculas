import React from 'react'
import axios from 'axios'

import Destaque from '../componentes/Destaque'
import Estrenos from '../componentes/Estrenos'
import { async } from 'q'

class HomePage extends React.Component{
state={
    peliculas:[]
}
    componentDidMount(){
        this.getData()
    }
getData = async ()=>{
   try{
    const resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=55d164ce66617c1ee8737338b2ee97f4&language=es')
    this.setState({
        peliculas:resultados.data.results
    })   
   } catch(error){
       console.log(error.message)
   }
   
}
    render(){
        return(
            <div>
            <Destaque/>
            <Estrenos peliculas = {this.state.peliculas}/>
            </div>
        );
    }
}

export default HomePage