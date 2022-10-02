import React from "react";

const Trabajos = (props) => {
    return(
      <div className="caja_general_trabajos">
      <div className="caja_trabajos">
      <div className="reseña-trabajo"><h3>Tableros automatizados</h3>
      <div className="imagentra1"></div><h4>
      Instalación de tableros de comando-control empleando micro PLCs, 
      actuadores, temporizadores, variadores de frecuencia, contadores, 
      señalización de estados eléctricos y más.</h4>
      </div>
      <div className="reseña-trabajo"> <h3>Prueba de aislamiento con megohmetro</h3>
      <div className="imagentra2"></div><h4>
      Se determina el aislamiento del conductor, 
      ya sea en una instalación monofasica o trifasica 
      como en las bobinas de un motor.</h4>
      </div>
      <div className="reseña-trabajo"><h3> Control de potencias</h3> 
      <div className="imagentra3"></div><h4>
      Se miden las potencias activa, aparente y reactiva. 
      Se realiza el triángulo de potencias y se prodece a evaluar la necesidad de 
       incorporar filtros de red y/o banco de condensadores.</h4>
      </div>
      <div className="reseña-trabajo"><h3> Banco de condensadores</h3>
      <div className="imagentra4"></div><h4>
      Siguiendo el control de potencias, se evalúa el tipo de banco y la magnitud del mismo.</h4>
      </div>
      <div className="reseña-trabajo"><h3> Evaluación, reparación y bobinado de motores eléctricos</h3>
      <div className="imagentra5"></div><h4>
      Empleo de megohmetro, pinza cofimetrica y herramientas idóneas</h4>
      </div>
      <div className="reseña-trabajo"> <h3>Dibujo técnico</h3>
      <div className="imagentra6"></div><h4>
      Empleo de Autocad y Solidworks</h4>
      </div>
      </div>
      </div>
  );
}

export {Trabajos}