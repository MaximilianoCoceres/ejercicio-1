/* ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    
    
    constructor(props) {
        super(props);
        console.log(" CONSTRUCTOR: Cuando se instancia el componente")
    }

    componentWillMount() {
        console.log(" WILLMOUNT: aantes del montaje del componente")
    }

    componentDidMount() {
        console.log(" didMOUNT: justo al acabar el montaje del componenete, antes de renderizarlo")
    }

    componentWillReceiveProps(nextProps) {
        console.log(" WillReceiveProps: si va a recibir nuevas props")
    }

    shouldComponentUpdate(nextProps, nextState) {
        /* return true / false
        Controlar si el componenente debe o no actualizarse
        */
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(" WillUpdate: justo antes de actualizarse")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(" DidUpdate: justo despoues de actualizarse")
    }

    componentWillUnmount() {
        console.log(" WillUnmount: justo antes de desaparecer")
    }

    render() {
        return (
            <div>
 
            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;