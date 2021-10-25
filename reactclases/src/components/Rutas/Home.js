import {Component} from 'react';
import logohome from './../../assets/images/home.png'
class Home extends Component {
    render (){
        return (
            <div>
                <h1>Tamos en home</h1>
                <img src={logohome}/>
            </div>
        )
    }
}

export default Home;