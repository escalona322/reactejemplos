import {Component} from 'react';
import logomusica from './../../assets/images/musica.jpg'
class Musica extends Component {
    render (){
        return (
            <div>
                <h1>Tamos en musica</h1>
                <img src={logomusica}/>
            </div>
        )
    }
}

export default Musica;