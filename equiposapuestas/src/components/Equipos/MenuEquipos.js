import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';


export default class MenuEquipos extends Component {

    state = {
        equipos: [],
        status: false
    }

    cargarEquipos = () => {
        var request = "/api/Equipos"
        var url = Global.urlchampions+request
   
        axios.get(url).then(res => {
            //console.log(res.data);
            this.setState({
                equipos: res.data,
                status: true
            })
            //console.log(res.data);
           
        })
    }

    componentDidMount = () => {
        this.cargarEquipos();
    }
    render() {
        return (
            <div>
                    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
           <div class="container-fluid">
             <span class="navbar-brand" href="#">Champions</span>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
          </button>

              <div class="collapse navbar-collapse" id="navbarsExample03">
               <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <NavLink class="nav-link active" aria-current="page" 
            to="/Home">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" 
            to="/Apuestas">Apuestas</NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink class="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Equipos</NavLink>
            <ul class="dropdown-menu" aria-labelledby="dropdown03">
              {/* <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li> */}
              {this.state.equipos.map((equipo, index) => {
                  return (
                      <li>
                            <NavLink class="dropdown-item"
                             to={"/equipo/"+equipo.idEquipo}>
                                {equipo.nombre}
                            </NavLink>
                        </li>
                  )
              })}
            </ul>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>
            </div>
        )
    }
}
