import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logomdb.png'

const Footer = styled.div`
background:rgba(30,50,56,1);
padding:20px;
`

export default ()=>(
    <Footer>
     <img src={Logo} alt="Logo Moviedb" width="200" height="75"/>
    </Footer>
)

