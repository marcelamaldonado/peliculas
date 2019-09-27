import React from 'react'
import axios from 'axios'

import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';
import styled from 'styled-components'

import TituloSeccion from '../componentes/TituloSeccion'
import {connect} from 'react-redux'


class HomePage extends React.Component {
    state = {
        peliculas: [],
        peliculaDestacada: "",
        proximos_estrenos: []
    }
    componentDidMount() {
        this.getData()
        this.getProximosEstrenos()
        console.log(this.props.test.test)
    }
    //Metodo para que la API nos devuelva proximos estrenos movies
    getProximosEstrenos = async () => {
        try {
            const resultados = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=55d164ce66617c1ee8737338b2ee97f4&language=es')

            this.setState({
                proximos_estrenos: resultados.data.results
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    // Metodo para pedirle a la API que me retorne 
    //los resultados de peliculas de estreno 
    getData = async () => {
        try {
            const resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=55d164ce66617c1ee8737338b2ee97f4&language=es')
            this.setPeliculaDestacada(resultados.data.results) //selecciona una pelicula al azar
            this.setState({
                peliculas: resultados.data.results
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    setPeliculaDestacada(peliculas) {
        const peliculaDestacada = peliculas[Math.floor(Math.random() * peliculas.length)]
        this.setState({
            peliculaDestacada
        })
    }
    render() {
        return (
            <div>
                <Destaque pelicula={this.state.peliculaDestacada} />
                <TituloSeccion>Estrenos:</TituloSeccion>
                <Estrenos peliculas={this.state.peliculas} />
                <TituloSeccion>Proximamente:</TituloSeccion>
                <Estrenos peliculas={this.state.proximos_estrenos} />
            </div>
        );
    }
}

export default HomePage