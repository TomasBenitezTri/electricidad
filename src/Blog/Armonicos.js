import React from "react";

const Armonicos = (props) => {
    return(
    <div className="">
    <h2>Armónicos Eléctricos</h2>

    <span><h3>¿Qué son los armónicos?</h3>

En un sistema de energía eléctrica, un armónico es un voltaje o corriente en un múltiplo de la frecuencia fundamental del sistema. Los armónicos se pueden describir mejor como la forma o las características de una forma de onda de voltaje o corriente en relación con su frecuencia fundamental. Cuando las formas de onda se desvían de una forma de onda sinusoidal, contienen armónicos.
Las frecuencias armónicas en la red eléctrica son una causa frecuente de problemas de calidad de la energía, lo que resulta en un aumento del calentamiento en los equipos y conductores, fallas en los variadores de velocidad y pulsaciones de torque en los motores.

<h3>¿Qué causa los armónicos?</h3>
Las cargas eléctricas de CA se denominan lineales o no lineales, según cómo consuman la corriente de la forma de onda de la fuente de alimentación principal. Con una carga lineal, la relación entre las formas de onda de voltaje y corriente son sinusoidales y la corriente en cualquier momento es proporcional al voltaje; Esto se conoce como la ley de Ohm. Ejemplos de cargas lineales incluyen transformadores, motores y condensadores.
Con una carga no lineal, la corriente no es proporcional al voltaje y fluctúa en función de la impedancia de carga alterna, lo que significa que la corriente que consume no tiene la misma forma de onda que el voltaje de suministro. Las cargas no lineales dibujan corrientes en pulsos cortos abruptos. Estos pulsos distorsionan las formas de onda de corriente, lo que a su vez genera armónicos que pueden conducir a problemas de energía que afectan tanto al equipo del sistema de distribución como a las cargas conectadas a él. Los ejemplos de cargas no lineales incluyen rectificadores, variadores de velocidad y dispositivos electrónicos como computadoras, impresoras, televisores, servidores y sistemas de telecomunicaciones que utilizan tecnologías de conversión de energía de fuente de alimentación conmutada.
<h3>¿Cuáles son las consecuencias de los armónicos?</h3>
La capacidad de un sistema de potencia para funcionar a niveles óptimos se ve comprometida cuando la distorsión armónica ingresa al sistema. Los armónicos crean ineficiencias en las operaciones de los equipos debido a la mayor necesidad de consumo de energía. El aumento de la corriente total requerida crea mayores costos de instalación y de energía, sobrecalentamiento y disminución de la rentabilidad en los diferentes sistemas eléctricos.
<h3>¿Cómo puede reducir los armónicos?</h3>
Algunas de las formas más comunes para controlar los armónicos incluyen:
Intentando reducir las corrientes armónicas producidas por la carga. Agregar un reactor de línea o transformador en serie reducirá significativamente los armónicos, además de proporcionar beneficios de protección contra transientes.
Agregar filtros para desviar las corrientes armónicas del sistema, bloqueando así las corrientes de entrada al sistema en primer lugar, o suministrar las corrientes armónicas localmente. Por ejemplo, agregar un filtro de derivación Shunt tan cerca de la fuente como sea práctico esto cortocircuita las corrientes armónicas. Manteniendo las corrientes fuera del sistema de suministro. El filtro de derivación Shunt es una buena opción porque es rentable y puede corregir el factor de potencia de carga al tiempo que elimina la corriente armónica.
Modificación de la frecuencia de respuesta del sistema con filtros, inductores o condensadores. Los filtros activos funcionan mediante el suministro electrónico del componente armónico de la corriente en una carga no lineal.
Realizando conexiones del transformador, que pueden reducir las corrientes armónicas en sistemas trifásicos.
Cambiar el tamaño del condensador. Esta es a menudo una de las opciones menos costosas tanto para las compañías de servicios públicos como para los clientes industriales.
</span>
</div>
  );
}

export {Armonicos}