import React from "react";

const Automatizacion = (props) => {
    return(
    <div className="">
    <h2>Automatización</h2>
    <span>
   
Los PLC se usan en diversas aplicaciones en plantas energéticas, sistemas de red eléctrica inteligente, unidades de fabricación, monitorización de herramientas o equipos para maquinaria, creación del sistema y funciones de control de procesos. Exploraremos algunos de los casos de uso de los PLC empleados en la automatización industrial.
a_ Sistema automático de mezcla y envasado con PLC en el sector de las bebidas y los jugos
En un sistema automático de mezcla y envasado inicialmente se mezclan dos líquidos (agua y proteína líquida) de dos contenedores diferentes en otro contenedor, como lo muestra la figura 2. La solución mezclada se debe envasar en las botellas una a una. El botón de inicio arranca el funcionamiento de todo el sistema. Aquí la salida del sensor es la entrada del PLC y las salidas del PLC controlan las válvulas, el mezclador y la cinta transportadora. El primer líquido (agua) fluye hacia el contenedor de mezclado durante 10 segundos. Luego el segundo líquido fluye hacia el contenedor de mezclado durante 15 segundos. La operación de mezclado dura 20 segundos. El botón de parada controla el funcionamiento. Haga clic aquí para más información sobre los productos de controlador de procesos.
b_ Procesar vidrios planos y controlar la proporción de los materiales usando el controlador PLC en el sector del vidrio
En el sector del vidrio los PLC se usan para controlar la proporción de los materiales y procesar vidrios planos. La tecnología en evolución constante ha avanzado con los años y por consiguiente se ha creado una demanda de crecimiento consistente del modo de control por PLC en el sector de los vidrios. La producción de vidrios es un proceso sofisticado. Las empresas involucradas con frecuencia utilizan PLC con tecnología BUS como modo de control. EL PLC registra datos analógicos en la producción de los vidrios y control de posición y calidad digital en el proceso.
c_ Mezcla de materias primas usando PLC en el sector de la fabricación de cemento
La fabricación del cemento involucra la mezcla de diferentes materias primas en un horno. La calidad del producto final se ve afectada por esas materias primas y sus proporciones respectivas. Los datos deben ser exactos para garantizar el uso de las cantidades y calidades correctas de la materia prima. Un sistema de control distribuido consiste en PLC en modo de usuario y software de configuración, que se usan en los procesos de gestión y producción. Los PLC específicamente controlan los hornos de carbón, hornos verticales y molinos de bolas.
    </span>
    </div>
  );
}

export {Automatizacion}