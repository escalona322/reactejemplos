import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';


export default class BuscadorCustomers extends Component {

    cajaIdRef = React.createRef();

    state = {
        customer: {

        },
        status: false
    };
    buscarCustomer = (e) => {
        e.preventDefault();
        var id = this.cajaIdRef.current.value;
        var request = "/customers/"+id;
        var url = Global.urlnorthwind + request;
        axios.get(url).then(res => {
            console.log(res);
            this.setState({
                customer: res.data.customer,
                status: true
            })
        });
    };
    render() {
        return (
            <div>
                <h1>Buscador Customer</h1>
                <form onSubmit={this.buscarCustomer}>
                    <label>Introduzca id Customer</label><br/>
                    <input type="text" ref={this.cajaIdRef}/>
                    <button>
                        Buscar Customer
                    </button>
                </form>
                <h1>Empresa: {this.state.customer.companyName}</h1>
                <h1>Nombre: {this.state.customer.contactName}</h1>
                <h1>Puesto: {this.state.customer.contactTitle}</h1>
                <h1>Ciudad: {this.state.customer.city}</h1>
            
            </div>
        )
    }
}
