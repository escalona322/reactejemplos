import {Component} from 'react';
import logocine from './../../assets/images/cine.jpg'
class Cine extends Component {
    render (){
        return (
            <div>
                <h1>Tamos en cine</h1>
                <img src={logocine}/>
            </div>
        )
    }
}

export default Cine;