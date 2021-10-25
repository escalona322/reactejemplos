import React, { Component } from 'react';

class NumerosHijos extends Component {

    sumarNumHijo = () => {
        var numerohijo = this.props.numero;

        this.props.sumarNumero(numerohijo);
    }

    render(){
        return(
            <React.Fragment>
                <h2 style={{color:"purple"}}>Número: {this.props.numero}</h2>
                <button onClick={() => this.sumarNumHijo()}>
                    Sumar
                </button>
            </React.Fragment>
        )
    }
}

export default NumerosHijos;