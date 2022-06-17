import React, {useState} from 'react'
import {Container} from './style'
import {Link} from 'react-router-dom'

const Home:React.FC = ()=>{
    const [ isLoad, setIsLoad ] = useState(false)
    return (
        <Container>
            { isLoad ? (
                <div>
                    <p>Carregando...</p>
                </div>
            ):(
                <div>
                    <h1>Home</h1>
                    <Link to="/contact" className='link'> Acessar página de contato </Link>
                </div>
            )}

          <div className='button-container'>
          <button onClick={()=> setIsLoad(!isLoad)}>Click aqui !</button>
          </div>
        </Container>
    )
}

export default Home