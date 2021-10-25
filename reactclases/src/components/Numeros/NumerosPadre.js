import { Component } from "react";
import NumerosHijos from "./NumerosHijo";

class NumerosPadre extends Component {

        state = {
            suma: 0,
            numeros: [21, 16, 31],
        };

        sumarNumero = (num) => {
            this.setState({
                suma: this.state.suma+num,
            })
        }

        crearNumero = () => {
            this.state.numeros.push(parseInt(Math.random()*100));
            this.setState({
                numeros: this.state.numeros,
            })
        }

        render(){
            return(
                <div>
                    {
                        //esto funciona como un ifelse
                        this.state.suma == 0 ?
                        //true
                        (<h1>Condicion true</h1>):
                        this.state.suma == 21 ?
                        //21
                        (<h1>Condicion 21</h1>):
                        //sintaxis or
                        (this.state.suma == 16 || this.state.suma==31) ?
                        (<h1>Condicion or</h1>):
                        //else
                        (<h1>Condicion else</h1>)
                    }
                    <button onClick={this.crearNumero}>Nuevo numero</button>
                    <h1 style={{color:"darkturquoise"}}>Suma: {this.state.suma}</h1>
                    {this.state.numeros.map((numer, index) => {
                       return (<NumerosHijos numero={numer} key={index}
                        sumarNumero={this.sumarNumero}/>)
                    })}

                </div>
            )
        }
}

export default NumerosPadre;