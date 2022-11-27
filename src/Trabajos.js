import React from "react";

const Trabajos = (props) => {
    return(
      <div className="caja_general_trabajos">

      <div className="caja_trabajos">
      
      <section className="reseña-trabajo"><h3>Tableros automatizados</h3>
      <img className="imagentra1"></img><h4>
      Instalación de tableros de comando-potencia empleando contactores,
      actuadores, temporizadores, variadores de frecuencia, fusibles,
      señalización de estados eléctricos y más.</h4>
      </section>

      <section className="reseña-trabajo"><h3>Informes reglamentarios AEA</h3>
      <img className="imagentra7"></img><h4>
      Se realiza un examen de las instalaciones y se elabora un informe 
      basado en las normas que ofrece la Asociación Electroténica Argentina.
      </h4>
      </section>
      
      <section className="reseña-trabajo"> <h3>Prueba de aislamiento</h3>
      <img className="imagentra2"></img><h4>
      Utilizando un megohmetro se determina el aislamiento del conductor, 
      ya sea en una instalación monofasica o trifasica 
      como en las bobinas de un motor.</h4>
      </section>
      
      <section className="reseña-trabajo"><h3> Control de potencias</h3> 
      <img className="imagentra3"></img><h4>
      Empleando una pinza cofimétrica se miden las potencias activa, reactiva y aparente. 
      Se realiza el triángulo de potencias con lo que la necesidad de 
      incorporar filtros de red y/o banco de condensadores.</h4>
      </section>
      
      <section className="reseña-trabajo"><h3> Banco de condensadores</h3>
      <img className="imagentra4"></img><h4>
      Siguiendo el control de potencias, se evalúa el tipo de banco y la magnitud del mismo.</h4>
      </section>
      
      <section className="reseña-trabajo"><h3> Evaluación, reparación y bobinado de motores eléctricos</h3>
      <img className="imagentra5"></img><h4>
      Con el empleo de megohmetro, pinza cofimetrica y demás herramientas idóneas
      verificamos el estado del motor, con ello procedemos evaluar si
      el motor necesita un mantenimiento correctivo, preventivo o rebobinado.</h4>
      </section>
      
      <section className="reseña-trabajo"> <h3>Dibujo técnico</h3>
      <img className="imagentra6"></img><h4>
      Empleo de los software CADEe SIMU, Autocad y Solidworks</h4>
      </section>
      
      </div>
      
      </div>
  );
}

export {Trabajos}