import React, { Component } from 'react';
import axios from 'axios';
import Global from "../../Global";
import { Redirect } from 'react-router';

export default class EliminarDoctor extends Component {

    state = {
        status: false
    }

    cajaidRef = React.createRef();

  

    deleteDoctor = (e) => {
        e.preventDefault();

        var iddoc = this.cajaidRef.current.value;
        var request = "/api/Doctores/"+iddoc;
        var url = Global.urldoctores+request;

        axios.delete(url).then(res => {
            this.setState({
                status:true,
            })
        });
    }
    render() {
        if(this.state.status == true){
            return <Redirect to="/doctores"/>
        }
        return (
            <div>
                <h1>Eliminar Doctor</h1>
                <h2>Quieres eliminar el doctor: </h2>
                <h2>{this.props.iddoc}</h2>

                <form onSubmit={this.deleteDoctor}>
                    <input type="hidden" 
                    value={this.props.iddoc}
                    ref={this.cajaidRef}/>
                    <button className="btn btn-danger">
                        Eliminar
                    </button>
                </form>
            </div>
        )
    }
}
