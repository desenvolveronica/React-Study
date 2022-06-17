import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Container} from "./style"


interface IData {
    name: String;
    email: String;
}


const Contact: React.FC = () =>  {
    const [ data, setData] = useState<IData>( {} as IData)
    return(
        <Container> 
            <div className='form-wrapper'>
                <h1>Contact</h1>
                Estado Name: {data?.name}<br/>
                Estado Email: {data?.email}
                <div className='card'>
                    <form onSubmit={()=> {}}>
                        <input 
                            type="text" 
                            placeholder='Nome'
                            onChange={ e => setData({...data, name:e.target.value})}
                        />

                        <input 
                            type="text" 
                            placeholder='Email'
                            onChange={e => setData({...data, email: e.target.value}) }
                        />

                        <input 
                            type="submit" 
                            value='Cadastrar' 
                            className='submit'
                        />
                    </form>
                </div>
                <Link to="/" className='link'> Acessar página Home </Link>
            </div>
        </Container>
    )
}

export default Contact