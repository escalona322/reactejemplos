import { Component } from "react/cjs/react.production.min";

class DibujosComplejos extends Component {

    dibujarNumero = () => {
        /* Para visualizar un bucle, es 
        necesario usar una lista (array)
        si pretendo sacar 10 returns por
        ejemplo de un bluque, solo saldra el 
        primer valor. El return se hace fuera del bucle,
        pasandole la lista que guardamos dentro del msimo*/
        var lista = [];
        for (var i = 1; i<= 5; i++){
            lista.push(<h2>Número{i}</h2>);
        }
        return lista;
    }
    render(){
        return (<div>
            <h1>Dibujos complejos</h1>
            <ul>{this.dibujarNumero()}</ul>
          
        </div>);
    }
}

export default DibujosComplejos