import React from "react";

const Reglas = (props) => {
    return(
    <div className="">
    <h3>Normas AEA básicas que toda instalación debe cumplir</h3>
    <span>
    
    <h3>Puesta a tierra</h3>
    Es un concepto vinculado a la seguridad de las personas, porque estas se hallan a su mismo potencial por estar pisando el suelo. Si cualquier aparato está a ese mismo potencial no habrá diferencia entre el aparato y la persona, por lo que no habrá descarga eléctrica peligrosa.
    Los valores se deben medir con un telurímetro, ya sea de impedancia de lazo o con jabalinas.
    El valor máximo de resistencia de puesta a tierra no podrá superar los 40 ohm, el valor debe ser verificado por medición. 
    AEA 90364, Parte 7, Secciones 771.3, 771.5 y 771.5.
    <h3>Proteccón diferencial con disyuntor</h3>
    El disyuntor tiene como función principal interrumpir el flujo de electricidad en un circuito cuando se registra una diferencia entre la corriente entrante y la saliente del mismo. Técnicamente detecta diferencias entre las magnitudes de intensidad y, en esos casos, corta.
    El ejemplo más común es cuando una persona recibe una descarga eléctrica. También aplica a cortocircuitos en aparatos defectuosos o problemas de humedad que generen fugas eléctricas menores.
    <h3>Correcta canalización siguiendo tabla 770.10.VII </h3>
    El sobre calentamiento por falta de espacio en una canalización puede ocasionar que los cables que se peguen, se deteriore la aislación y demás problemas.
    Por eso es que existe una normativa que regula el espacio dentro de la canalización que transporta los cables.
    <h3>ITM bipolar correctamente dimencionado</h3>
    Se debe colocar un Interruptor Termomagnético bipolar en el cual se corte la fase y el neutro.
    Tambíen se debe recordar que los ITM protegen los cables, por ende no deben ser sobre dimencionados y para asegurar el estado óptimo del conductor debemos buscar los valores recomendados en la ficha técnica del fabricante.
    </span>
    </div>
  );
}

export {Reglas}