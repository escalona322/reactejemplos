import React, { Component } from 'react'
//Ahora si, funciona onchange
export default class TablaSelect extends Component {
 
        optionseleccionado = React.createRef();

        state = {
            listanums: [],
        }

        generarOptions = () => {
            var options = [];

            for(var i=0; i<=5; i++){
                var aleat = Math.round((Math.random()*50)+1);
                if(i==0){
                    options.push(<option key={i} value={aleat} selected>{aleat}</option>);
                }else{
                    options.push(<option key={i} value={aleat}>{aleat}</option>);
                }                
            }
            console.log(options);
            return options;
        }

     
        hacerTablaMultiplicar = () => {
           
            var datos = [];
            var numero = parseInt(this.optionseleccionado.current.value);
            
            for (var i=1; i<=10; i++){
                var multi = numero * i;
                datos.push(<tr>
                    <td>{numero + "*" + i}</td>
                    <td>{multi}</td>
                </tr>);
            }
            this.setState({listanums:datos})
        }
    render() {
        return (
            <div>
                <h1>Tabla con select</h1>

                <form>
                    <select ref={this.optionseleccionado} onChange={this.hacerTablaMultiplicar}>
                        {this.generarOptions()}
                    </select>
                  
                </form>


                    <table border="1">
                        <thead>
                            <tr>
                                <th>Operacion</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.listanums.map((val, index) => {
                         return (val
                           )
                       })}  
                        </tbody>
                    </table>
              
            </div>
        )
    }
}
