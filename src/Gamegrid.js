import React , {Component} from 'react';
import Game from './Game'


class Gamegrid extends Component{
    render(){
        function searching(term){
            return function(x){
              return x.name.toLowerCase().includes(term.toLowerCase())||!term;
            }
            }
        return   <div>{ this.props.people.filter(searching(this.props.term)).map((person,index)=>
           <Game  person={person} key={index}></Game>
              )
            }
            </div>
    }
}
export default Gamegrid