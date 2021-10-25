import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {

    selectmultiple = React.createRef();

    state = {
        seleccionados : [],
    }
    dibujarOptions = () => {
        var options = [];

        for(var i=1; i<=10; i++){
            options.push(
                <option key={i} value={"Elemento" + i}>
                    {"Elemento "+i}
                </option>
            );
        }
        return options;
    }

    mostrarSeleccionados = (e) => {
        e.preventDefault();

        var options = this.selectmultiple.current.options;

        var datos = [];

        for(var i=0; i<options.length; i++){
            if(options[i].selected == true){
                datos.push(options[i].value + " , ");
            }
        }
      
        this.setState(
               { seleccionados: datos,}
            )
    }
    
    render() {
        return (
            <div>
                <h1>Seleccion multiple elementos</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label>
                        Seleccine elementos:
                    </label>
                    <br/>
                    <select size="10" multiple ref={this.selectmultiple}>
                        {this.dibujarOptions()}
                    </select>
                    <button>Mosrar seleccionados</button>
                </form>
                <h1>
                    {this.state.seleccionados}
                </h1>

            </div>
        )
    }
}
