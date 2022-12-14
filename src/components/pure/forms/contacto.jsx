import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactoF from './contactoF';


class Contacto extends Component {
    render() {
        return (
            <div>
                <h3>Nombre: {this.props.name}</h3>
                <h3>Apellido: {this.props.lastname}</h3>
                <h3>Email: {this.props.email}</h3>
                <h3><ContactoF conected={true}/></h3>
            </div>
        );
    }
}


Contacto.propTypes = {
name: PropTypes.string,
lastname: PropTypes.string,
email: PropTypes.string,
conected: PropTypes.bool
};


export default Contacto;
