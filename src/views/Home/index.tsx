import React from 'react'
import {Container} from './style'
import {Link} from 'react-router-dom'

const Home:React.FC = ()=>{
    return (
        <Container>
            <h1>Home</h1>
            <Link to="/contact" className='link'> Acessar página de contato </Link>
        </Container>
    )
}

export default Home