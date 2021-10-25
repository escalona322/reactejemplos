import React, {Component} from 'react';

class HijoDeporte extends Component {


    mostrarFavHijo = () => {
        /*Aqui se llama al metodo del padre
        mediante props*/
        var depor = this.props.nombre;
        this.props.mostrarFavorito(depor);
    }

    render (){
        return(
            <React.Fragment>
                <ul style={{color:"lawngreen"}}>
                     {this.props.nombre}-
                     <button onClick={()=>this.mostrarFavHijo()} >
                         Seleccionar favorito
                     </button>
                </ul>
            </React.Fragment>       
        )
    }
}

export default HijoDeporte;