import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) =>{
    return(
        <div className='caja_general'>
        <div className='nav'>
            <div className='cajanav'> <NavLink to='/' className='cajanavlink'> Inicio </NavLink> </div>
            <div className='cajanav'> <NavLink to='/trabajos' className='cajanavlink'> Trabajos </NavLink> </div>
            <div className='cajanav'> <NavLink to='/blog' className='cajanavlink'> Blog </NavLink> </div>
        </div>
        </div> 
    );
}
export {Nav};