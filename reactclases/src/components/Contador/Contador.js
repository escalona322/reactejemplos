import {Component} from 'react';
//Tb se puede usar sintaxis de js aunque estemos trabajando con objetos
function miFunction() {
console.log("Soy una funcon fuera de la clase")
}
class Contador extends Component{
    //Al estar dentro de la clase hay que usar this
    //tanto para la variable como para el metodo
    contador = 1;
    incrementarContador = () => {
        console.log("Contador: "+this.contador);
        this.contador++;
    };
    state = {value: 1};

    añadirState = () => {
        this.setState({
            value: this.state.value+1
        });
    }

    render () {
        var valor = parseInt(this.props.inicio);
        const miMetodo = () =>{
            valor += 1;
            console.log("Soy un metodo dentro de render " + valor);
        }
        return (<div>
            <h1>Primer component JSX</h1>
            <h2>
                Inicio: {this.props.inicio}
            </h2>
            <h3>Variable de estado {this.state.value}</h3>
            <button onClick={()=>{
                miMetodo();
                miFunction();
                this.incrementarContador();
            }}>Pulsa y haz algo</button>
            <button onClick = {() => {
                this.añadirState();
            }}>Añadir variable estado</button>
        </div>)
    }
}

export default Contador;