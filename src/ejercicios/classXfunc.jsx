import React, {useState,useEffect} from 'react';

const ClassXfunc = () => {

    const fechaActual= new Date();

    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(fechaActual.getFullYear() - 1993);
    const [nombre, setNombre] = useState('Maxi');
    const [apellidos, setApellidos] = useState('Coceres');

    useEffect(() => {
        let timerID = setInterval (
           () => tick(), 1000
        );
        return () => clearInterval(timerID)
     }, []);

     const tick = () => {
        setFecha(new Date())
        setEdad(edad)
     }

    return (
        <div>
        <h2>Hora actual{fecha.toLocaleString()}
        </h2>
        <h3>{nombre}{apellidos}</h3>
        <h4>Edad: {edad}</h4>
        </div>
    );
}

export default ClassXfunc;
