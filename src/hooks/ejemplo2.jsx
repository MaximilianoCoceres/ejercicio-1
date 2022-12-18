/* Ejemplo de uso de:
-useState()
-useRef()
-useEffect()
*/

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
/* vamnos a crear 2 copntador distintos, cada uno en un estado diferente */

const [contador1, setContador1] = useState(0)
const [contador2, setContador2] = useState(0)


/* vamos a crear una refencia con useRef() para asociar una variable con un elemnentto del dom del componente (vista html) */

const miRef = useRef();

function incrementar1(){
    setContador1(contador1 + 1);
}


function incrementar2(){
    setContador2(contador2 + 1);
}

/* TRABAJANDO CON UseEffect() */
/* caso 1: ejecutar siempre un snippet de codigo  
cada vez que haya un cambnio de estado del componnente se ejecuta aquello que este denbtro del useEffect()
*/

/* useEffect(()=>{

    console.log('cambio en el estado del componente');
    console.log('mostrando referencia a elemento en el dom');
    console.log(miRef);
}) */



/* caso 2:ejecutar solo cuando cambie contador 1 , cada vez que se cambie contador 1 se ejecuta lo que diga useEffect(), en caso que cambie el 2 no habra ejcucion.*/

useEffect(()=>{
    console.log('cambio en el estado del contador1');
    console.log('mostrando referencia a elemento en el dom');
    console.log(miRef);

},[contador1]);






    return (
        <div>
      <h1>***EJEMPLO DE UseState(), useRef(), useEffect()***</h1>
      <h2>CONTADOR1: {contador1}</h2>
      <h2>CONTADOR2: {contador2}</h2>
      {/* elemento referenciado */}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
      {/* bloque de botones para cambiar los contadores */}
      <div>
      <button onClick={incrementar1}>Incrementar contador1</button>
      <button onClick={incrementar2}>Incrementar contador2</button>
      </div>
    </div>
    );
}

export default Ejemplo2;
