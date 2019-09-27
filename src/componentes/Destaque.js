import React from 'react'
import styled from 'styled-components'

const Inicio = styled.div`
background: rgba(55,71,79,1);
color:White;
font-family: 'Anton', sans-serif;
`

export default ({pelicula})=>(
    <Inicio>
   {pelicula.title}
    </Inicio>
)