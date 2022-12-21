import React, { useState } from "react";

//definiendo estilos en constantes

//estilo para usuario loggeado
const loggedStyle = {
  color: "white",
};

//estilo para usuario no loggeado
const unLoggedStyle = {
  color: "red",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  //generamos un estado para el componente y asi controlar si el usuariuo esta loggeado o no

  const [logged, setLogged] = useState(false);

  const greetingUser =()=> (<p>Hola, {props.name}</p>);
  const pleaseLogin = ()=>(<p>Please Login</p>);

  return (
    <div style={logged ? loggedStyle : unLoggedStyle}>
      {logged ? greetingUser() : pleaseLogin()}
      <button
        onClick={() => {
          console.log("boton pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
