import { Component } from "react/cjs/react.production.min";

class DibujosComplejos2 extends Component {

    state = {
        nombres: ["Marcos", "Carlos", "Antonio", "Lucia", "Gema"]
    };

    insertarNombre = () => {
        this.state.nombres.push("Paco");

        this.setState(this.state.nombres);
    };
   
    render(){
        return (<div>
            <h1>Dibujos complejos</h1>
            <button onClick={()=>{
                this.insertarNombre()
            }}>Añadir al array</button>
           {
               this.state.nombres.map((name, index) =>{
                    return <h2 key={index}>{index} {name}</h2>;
               })
           }
    
        </div>);
     
    }
}

export default DibujosComplejos2