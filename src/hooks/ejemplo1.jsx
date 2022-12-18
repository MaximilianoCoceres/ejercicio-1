/* ejemplo de uso useState 
crear un componmente de tipo funcion y acceder a su estado privado a traves de un hook y ademas poder modificarlo
*/

import React, { useState } from "react";

const Ejemplo1 = () => {
  //valor inicial para un contador

  const valorInicial = 0;

  //valor inicial para una persona

  const personaInicial = {
    nombre: "Maxi",
    email: "maxiprog7@gmail.com",
  };

  /* queremos que el VALOR INICIAL Y LA PERSONA INICIAL sean parte del estado del componente para asi poder gestionar su cambio y que este se vea reflejado aen la viosta del componente
    

    const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    
    */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /* funcion para actualizar el estado privado que contiene el contador */

  function incrementarContador() {
    //funcionParaCambiar  (nuevoValor)
    setContador(contador + 1);
  }

  /*  funcion para actualizar el estado de persona en el compoente*/

  function actualizarPersona() {
    setPersona({
      nombre: "pepe",
      email: "pepe@im.com",
    });
  }

  return (
    <div>
      <h1>***EJEMPLO DE UseState()***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h3>EMAIL: {persona.email}</h3>

      {/* bloque de botones para actualizar los estados */}
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>Cmabiar de persona</button>
    </div>
  );
};

export default Ejemplo1;
