import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    cajanum = React.createRef();

    state = {
        tablanums: [],
    }
    
    sacarTabla = (e) => {

        e.preventDefault();

        var multitabla = [];

        var num = this.cajanum.current.value;

        for(var i=0; i<=20; i++){
            multitabla.push(num*i);
        }

        this.setState({
            tablanums: multitabla,
        })
    }
    render() {
        return (
            <div>
                <h1>Tabla de multiplicar</h1>

                <form onSubmit={this.sacarTabla}>
                    <label>Introduce un numero</label>
                    <input type="number" ref={this.cajanum}/><br/>
                    <button>    
                        Enviar 
                    </button>
                   <ul>
                   {this.state.tablanums.map((num, index) => {
                    return (<li key={index}>
                            {num}
                        </li>
                    )
                })}  
                   </ul>
                </form>
            </div>
        )
    }
}
