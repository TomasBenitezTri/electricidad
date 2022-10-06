import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) =>{
    return(
        <nav className='caja_general'>
        <form className='nav'>
            <a className='cajanav'> <NavLink to='/' className='cajanavlink'> Inicio </NavLink> </a>
            <a className='cajanav'> <NavLink to='/trabajos' className='cajanavlink'> Trabajos </NavLink> </a>
            <a className='cajanav'> <NavLink to='/blog' className='cajanavlink'> Blog </NavLink> </a>
        </form>
        </nav> 
    );
}
export {Nav};