import React from "react";
import { NavLink } from 'react-router-dom';

const Blog = (props) => {
    return(
      <div className="Caja_1_blog">
      
      <div className="Caja_2_blog">

      <h2>Artículos</h2>

      <article className="caja_articulo">
      <NavLink to='/conductor' className='enlace_blog'>
        <h3 className="titulo_blog">      La importacia del conductor  </h3>
          <img className="imagen_blog_1"></img>
      </NavLink>
      </article>

      <article className="caja_articulo">
      <NavLink to='/informe' className='enlace_blog'>
        <h3 className="titulo_blog">  Reglamentaciones básicas   </h3>
          <img className="imagen_blog_7"></img>
      </NavLink>
      </article>

      <article className="caja_articulo">
      <NavLink to='/banco-condensadores' className='enlace_blog'>
        <h3 className="titulo_blog">   Banco de condensadores     </h3>
          <img className="imagen_blog_2"></img>
      </NavLink>
      </article>

      <article className="caja_articulo">
      <NavLink to='/automatizacion' className='enlace_blog'> 
        <h3 className="titulo_blog">Protecciones eléctricas</h3>
          <img className="imagen_blog_3"></img>
      </NavLink>
      </article>
      
      <article className="caja_articulo">
      <NavLink to='/armonicos-electricos' className='enlace_blog'>
        <h3 className="titulo_blog"> El problema actual de los armónicos eléctricos </h3>
          <img className="imagen_blog_4"></img>
      </NavLink>   
      </article>
      
      <article className="caja_articulo">
      <NavLink to='/megado' className='enlace_blog'> 
        <h3 className="titulo_blog">Comprueba si tienes fugas!    </h3>
          <img className="imagen_blog_5"></img>
      </NavLink>
      </article>
      
      <article className="caja_articulo">
      <NavLink to='/mantenimiento-motores' className='enlace_blog'>
        <h3 className="titulo_blog"> Mantenimiento predictivo de motores   </h3>
          <img className="imagen_blog_6"></img>
      </NavLink>
      </article>
      
      </div>

      </div>
  );
}

export {Blog}