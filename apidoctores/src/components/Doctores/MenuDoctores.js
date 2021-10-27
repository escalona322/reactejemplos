import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuDoctores extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
           <div class="container-fluid">
             <a class="navbar-brand" href="#">Doctores</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
          </button>

              <div class="collapse navbar-collapse" id="navbarsExample03">
               <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <NavLink class="nav-link active" aria-current="page" to="/doctores">Doctores</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/nuevodoctor">Nuevo Doctor</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link disabled" to="#">Disabled</NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink class="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</NavLink>
            <ul class="dropdown-menu" aria-labelledby="dropdown03">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
            </div>
        )
    }
}
