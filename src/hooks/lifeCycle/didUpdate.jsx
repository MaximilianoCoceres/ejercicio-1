/* Ejemplo de uso de metodo componentDidUpdate en componbente de clase
y uso de hook en componente funcional */

import React, { Component, useEffect } from "react";

export class didUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "comportamiento cuando el componente recibe nuevos porops o cambio en su estado provado"
    );
  }

  render() {
    return (
      <div>
        <h1>didUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "comportamiento cuando el componente recibe nuevos porops o cambio en su estado provado"
    );
  });

  return (
    <div>
      <h1>didUpdateHook</h1>
    </div>
  );
};
