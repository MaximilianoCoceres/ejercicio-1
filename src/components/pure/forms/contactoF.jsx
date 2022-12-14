import React from 'react';
import PropTypes from "prop-types";


const ContactoF = (contacto) => {

    return (
        <div>
            <h4>Estado: { contacto.conected ? "Disponible" : "No disponible"}</h4>
        </div>
    );
};

ContactoF.propTypes = {
    conected: PropTypes.bool,
  };


export default ContactoF;
