import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul style={{display:'inline'}}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/Musica">Musica</a>
                    </li>
                    <li>
                      <a href="/Cine">Cine</a>
                    </li>
                    <li>
                      <a href="/Television">Television</a>
                    </li>
                    <li>
                        <a href="/forms">Formulario</a>
                    </li>
                    <li>
                        <a href="/collatz">Collatz</a>
                    </li>
                    <li>
                        <a href="/multi">Tabla multiplicar</a>
                    </li>
                    <li>
                        <a href="/multiselect">Tabla con select</a>
                    </li>
                    <li>
                        <a href="/selectmultiple">Select multiple</a>
                    </li>
                </ul>
            </div>
        )
    }
}
