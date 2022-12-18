/* ejemplo de uso del metodo componmentWillUnMount para compoenente clase
ejemplo de uso del hooks para componenete funcional
(cuando el componente va a desaparecer) */

import React, { Component, useEffect } from "react";

export class willUnMount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el compoenente desaparezca ");
  }

  render() {
    return (
      <div>
        <h1>willUnMount</h1>
      </div>
    );
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    // aqui no ponemos nada
    return () => {
      console.log("Comportamiento antes de que el compoenente desaparezca ");
    };
  }, []);

  return (
    <div>
      <h1>willUnMountHook</h1>
    </div>
  );
};
