/* Ejemplo hooks:
useState()
useContext()
*/


import React, {useState, useContext} from 'react';



/* Componenete 1: dispone de un cotexto que va a tener un valor que recibe desde el padre */
const miContexto = React.createContext()
const Componente1 = () => {
    /* inicializamos vacio, que va a relenarsede con los datos del padre */
    
    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/* pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

        const state = useContext(miContexto);

    return (
        <div>
            <h2>la sesión es: {state.sesion}</h2>
        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {

        token: '1234567',
        sesion: 1

    }

    /* creamos el estado de este componenete */

    const [sessionData, setSessionData] = useState(estadoInicial)


    function actualizarSesion(){
        
            setSessionData(
                
                {

            token: 'JWT12346',
            sesion: sessionData.sesion + 1,

        }
        )
    }



  return (
   <miContexto.Provider value={sessionData}>
            {/* todo lo que esta dentreo puiede leer los datos de sessionData */}
            {/* ademas si se actualiza los componentes e aqui tambien lo actualizan */}
                <h1>****Ejemplo de useState() y useContext()****</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesion</button>
   </miContexto.Provider>
  )
}


