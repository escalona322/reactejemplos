import React, { Component } from 'react'

export default class Collatz extends Component {

    cajanum = React.createRef();

    state = {
        listanums: [],
    }

    calcularCollatz = (e) => {

        e.preventDefault();

        var arraynums = [];
        console.log(this.cajanum.current.value  )
        var numinicial = this.cajanum.current.value;

        var numfinal = 0;

        var contador = 0;
        while(numfinal!=1){            
            if(numinicial%2==0){
                numinicial = numinicial/2;
                numfinal=numinicial;
                arraynums[contador] = numfinal;
            }else{
                numinicial = (numinicial*3)+1;
                numfinal = numinicial;
                arraynums[contador] = numfinal;
            }
            contador++;
        }

        this.setState({
            listanums: arraynums,
        })
    }
    render() {
        return (
            <div>
                <h1>Funcion de collatz</h1>

                <form onSubmit={this.calcularCollatz}>
                    <label>Introduce un número:</label>
                    <input type="number" ref={this.cajanum}/>
                    <button>Enviar</button>
                </form>
                <ul>

               
                {this.state.listanums.map((num, index) => {
                    return (<li key={index}>
                            {num}
                        </li>
                    )
                })}  
                </ul>
            </div>
        )
    }
}
