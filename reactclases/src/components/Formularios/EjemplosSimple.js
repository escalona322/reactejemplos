import React, { Component } from 'react'

export default class EjemplosSimple extends Component {
    /*Esto son variables de referencia, apuntan
    a objetos form, no tienen el valor directo de la caja*/
    cajanombre = React.createRef();
    cajaedad = React.createRef();

    state = {
        user: null,
    }

    recibirDatos = (e) => {
        //Se corta la propagacion del evento (nose q significa lol)
        e.preventDefault();
        /* Para recuperar el value de las referencias se usa
        referencia.current.value*/
        console.log(this.cajanombre.current.value);
        this.setState({
            user: {
                nombre: this.cajanombre.current.value,
                edad: this.cajaedad.current.value,
            },
        })
    };
    render() {
        return (
            <div>
                <h1>Ejemplos simples formularios</h1>
                {this.state.user && (
                    <div>
                        <h1 style={{color:"cyan"}}>
                            Usuario: {this.state.user.nombre},
                            Edad: {this.state.user.edad},
                        </h1>
                    </div>
                )}
                <form onSubmit={this.recibirDatos}>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajanombre}/><br/>
                    <label>Edad: </label>
                    <input type="text" ref={this.cajaedad}/><br/>
                    <button>
                        Enviar datos
                    </button>

                </form>
            </div>
        )
    }
}
