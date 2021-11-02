import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class MenuSeries extends Component {
    state = {
        series: [],
        status: false
    }

    cargarSeries = () => {
        var request = "/api/Series"
        var url = Global.urlapi+request
       
        axios.get(url).then(res => {
            
            this.setState({
                series: res.data,
                status: true
            })
            //console.log(res.data);
           
        })
    }

    componentDidMount = () => {
        this.cargarSeries();
    }
    render() {
       
        return (
            <div>
                 <div>
                    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
           <div class="container-fluid">
             <span class="navbar-brand" href="#">Series</span>
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
            to="/nuevopersonaje">Nuevo Personaje</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" 
            to="/modificarpersonaje">Modificar Personaje</NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink class="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Series</NavLink>
            <ul class="dropdown-menu" aria-labelledby="dropdown03">
              {this.state.series.map((serie, index) => {
                  return (
                   
                      <li>
                            <NavLink class="dropdown-item"
                             to={"/serie/"+serie.idSerie} key={index}>
                                {serie.nombre}
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
            </div>
        )
    }
}
