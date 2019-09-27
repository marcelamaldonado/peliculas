import React from 'react';
import styled from 'styled-components';
import TituloSeccion from '../componentes/TituloSeccion'
import Actor from '../componentes/Actor'


const Container = styled.div`
display:flex;
overflow:scroll;
`
export default ({ cast }) => {
    if (cast) {
        return (
        <div>
        <TituloSeccion>Reparto:</TituloSeccion>
        <Container>
        {cast.map(actor=><Actor actor={actor}/>)}
        </Container>
        </div>
        )
    } else {
        return <div>Cargando...</div>
    }
}


