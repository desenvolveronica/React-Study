import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from "./style"

const Contact: React.FC = () =>  {
    return(
        <Container> 
            <h1>Contact</h1>
            <Link to="/" className='link'> Acessar página Home </Link>
        </Container>
    )
}

export default Contact