import tipo from './tipo'
import axios from 'axios'
// importamos axios porque la funcion creadora de acciones la que se 
// va a encargar de hacer la solicitud a la data externa

const urlBase = 'https://api.themoviedb.org/3/movie/'
const key = '55d164ce66617c1ee8737338b2ee97f4'

export const getEstrenos = ()=>dispatch=>{
    dispatch({
        type:tipo.GET_ESTRENOS,
        payload: axios.get(`${urlBase}upcoming?api_key=${key}&language=es`)
    })
}