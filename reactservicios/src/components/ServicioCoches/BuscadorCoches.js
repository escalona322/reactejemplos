import React, { Component } from 'react'
import axios from 'axios';
export default class BuscadorCoches extends Component {

    cajaMarcaRef = React.createRef();

    urlCoches = "https://apicochespaco.azurewebsites.net/";

    state = {
        coches: [],
    }

    cargarTododsCoches = (e) => {
        e.preventDefault();
        var request = "webresources/coches";
        var url = this.urlCoches + request;
        
        axios.get(url).then(res => {
            console.log(res)

            this.setState({
                coches: res.data,
            })
        }) 
       
    }

    cargarCochesPorMarca = (e) => {
        e.preventDefault();
        var request = "webresources/coches";
        var url = this.urlCoches + request;
        var marca = this.cajaMarcaRef.current.value;
        var arraytest = [];
        var arrayconmarca = [];
        axios.get(url).then(res => {
      
            arraytest = res.data;
          
            console.log(marca);
            /*El filtro tambien se puede realizar con
            el siguiente metodo:
            .filter(obj => obj.propiedad==valor) */
            for(var i=0; i<arraytest.length; i++){              
                if(arraytest[i].marca==marca){
                    arrayconmarca.push(arraytest[i]);
                    console.log("dentro del if" + marca);
                }else{
                    console.log("pasando del if" + marca)
                }
            }
            this.setState({
                coches: arrayconmarca,
            })
                   
        }) 
    }
    render() {
        return (
            <div>
                <h1>Buscador coches</h1>
                <form onSubmit={this.cargarCochesPorMarca}>
                    <label>Introducir marca</label>
                    <input type="text" ref={this.cajaMarcaRef}/>
                    <button>Cargar coches por marca</button>
                </form>
                <br/>
                <hr/>
                <form onSubmit={this.cargarTododsCoches}>
                    <button>Cargar todos los coches</button>
                </form>
                <table border="1">
                    <thead>
                        <tr>
                            <th>IdCoche</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.coches.map((coche, index) =>{
                    return (
                    <tr key={index}>
                        <td>{coche.idcoche}</td>
                        <td>{coche.marca}</td>
                        <td>{coche.modelo}</td>
                        <td>{coche.conductor}</td>
                        <td><img placeholder="se lagea con la foto" src={coche.imagen} height="100px" width="125px"/></td>
                    </tr>)
                })}
                    </tbody>
                </table>
            </div>
        )
    }
}
