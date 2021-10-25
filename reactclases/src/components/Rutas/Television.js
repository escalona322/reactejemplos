import {Component} from 'react';
import logotele from './../../assets/images/Television.jpg'
class Television extends Component {

    render (){
        return (
            <div>
                <h1>Tamos en television</h1>
                <img src={logotele}/>
            </div>
        )
    }
}

export default Television;