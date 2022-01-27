import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'

const Boton = () => {
    
    return (
        <>
            <li className='note'>
            <Link to={'/'}></Link>
            <Button>a</Button>
            </li>
        </>        
    )
}

export default Boton