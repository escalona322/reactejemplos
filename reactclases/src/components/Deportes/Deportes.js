import { render } from '@testing-library/react';
import { Component } from 'react';
import HijoDeporte from './HijoDeporte';

class Deportes extends Component {
    
         /*Al ser el padre, tendremos 
        un list con todos los deportes, que 
        usaran HijoDeporte a modo de interfaz*/
        
        state = {
            seleccionado: "",
            deportes: ["Padel", "Petanca", "Curling", "Basket",
            "Tenis", "Canicas", "Futbol"],
        };

        
        mostrarFavorito = (deporteFavorito) => {
            /* Aqui se recibe algo del hijo (deporteFavorito) */
            console.log("Favorito: " + deporteFavorito);
            this.setState({
                seleccionado: deporteFavorito,
            });
        };
        insertarDeporte = () => {
            this.state.deportes.push("Golf")
            this.setState({
                deportes: this.state.deportes
            })
        };
    render(){
        
        return(
            <div>
                <h2>Su deporte favorito es: 
                    <span style={{color:"darkorange"}}>
                     {this.state.seleccionado}
                    </span>
                </h2>
                <button onClick={this.insertarDeporte}>Nuevo deporte</button>
                {this.state.deportes.map((depor, index) => {
                    return (<HijoDeporte
                         nombre={depor} key={index}
                         mostrarFavorito={this.mostrarFavorito}/>)

                })}               
               
            </div>
        )
    }
}

export default Deportes;