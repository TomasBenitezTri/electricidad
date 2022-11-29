import React from "react";

const Automatizacion = (props) => {
    return(
    <div className="">
    <h2>Protecciones Eléctricas</h2>
    <span>
    Los motores eléctricos requieren dos tipos básicos de protecciones: por cortocircuito (que puede ocurrir en sus bobinados o en los cables de su alimentación) y por sobrecarga. Se pueden completar con otras como: subtensión, sobretensión y puesta a tierra. Para hacer estas últimas protecciones se necesitan ciertos relés o dispositivos especialmente diseñados; para hacer las dos primeras de las protecciones mencionadas, se necesitan, para el caso de cortocircuito, fusibles y guardamotores magnéticos, y para el caso de las sobrecargas, relés de sobrecarga y guardamotores termomagnéticos, los cuales pueden estar relacionados con los elementos de maniobra como los contactores.
    Estas relaciones entre los distintos elementos de maniobra y protección se visualizan en los denominados esquemas funcionales, los cuales se diseñan de acuerdo a la forma en que ha de trabajar el motor eléctrico y de su potencia.
    La utilización de los distintos tipos de aparatos de maniobras (contactores, interruptores, interruptores automáticos, etcétera) y de protección disponibles (fusibles, guardamotores, relés automáticos, etcétera) permite la realización de diversos esquemas de comando y control para el funcionamiento.
    Para la determinación de los parámetros eléctricos de la protección de los motores hace falta conocer: corriente nominal o asignada, corriente de arranque, tiempo de arranque y características del equipo impulsado. Al respecto de estos parámetros, de los dos últimos se puede decir: que el tiempo de arranque es extremadamente breve e imposible de determinar en forma simple; y en cuanto a las características del equipo impulsado, solo se puede apreciar a simple vista si el motor eléctrico lo hace rápidamente o no.

    <h4>Protección contra cortocircuitos</h4>
    Se emplean fusibles o guardamotores magnéticos. En el caso de los primeros, son especialmente construidos y son del tipo aM. La corriente eléctrica nominal de estos fusibles puede tomarse para los motores eléctricos con rotor en cortocircuito como: 2,0 x IN. En donde IN es la corriente nominal o asignada. El guardamotor que es solamente magnético cumple la misma función que los fusibles, y se usa la misma forma de elegir el calibre.
    </span>
    </div>
  );
}

export {Automatizacion}