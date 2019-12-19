import React , {Component} from 'react';
import {Link} from 'react-router-dom'

class Game extends Component{

    render(){
     
        let person = this.props.person;
        return <Link to={`/${person._id}`}> <div className="game">
        <div className="overlay">
          <div className={"game"+person.id}></div>
          <img src={person.photo} width="100%" height="100%"></img>
          <h1 className="first">{person.name}</h1>
          
          <h1 className="date">{person.releasedate}</h1>             
      </div>
      </div>
      </Link>   
    }
}
export default Game