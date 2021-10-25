import React from "react";
import { Component } from "react/cjs/react.production.min";

class Comic extends Component {

    render () {
        return (
            <React.Fragment>
                <h1 style={{color:"blue"}}>
                    {this.props.comic.titulo}
                </h1>
                <button onClick={() => {
                    var seleccionado = this.props.comic;
                    this.props.seleccionarFavorito(seleccionado);
                }}>
                    Elegir favorito
                </button>
                <button onClick={() => {
                    var index = this.props.index;
                    this.props.eliminarComic(index);
                }}>
                    Eliminar comic
                </button>
                <button onClick={() => {
                    var index = this.props.index;
                    this.props.modificarComic(index);
                }}>
                    Modificar
                </button>
                <h4 style={{color:"orange"}}>
                    {this.props.comic.descripcion}
                </h4>
                <img src={this.props.comic.imagen}/>
            </React.Fragment>
        )
    }
}

export default Comic;