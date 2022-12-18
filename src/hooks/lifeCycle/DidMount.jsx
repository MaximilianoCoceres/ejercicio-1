/* Ejemeplo de uso de ciclo de vida del metodo en componente clase y en componente funcional  */

import React, { Component, useEffect } from "react";

class DidMount extends Component {
  componentDidMount() {
    console.log(
      "comportamiento ates de que el componente sea añadido al DOM (renderice )"
    );
  }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}



export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "comportamiento ates de que el componente sea añadido al DOM (renderice )"
    );
  }, []);

  return (
    <div>
      <h1>DidMountHook</h1>
    </div>
  );
};
