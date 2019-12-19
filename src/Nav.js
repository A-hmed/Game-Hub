import React , {Component} from 'react';
import {Link } from 'react-router-dom'

class Nav extends Component{
    render(){
        return  <div className="nav">
          
        <form >
<Link to="/sign"><button>signup</button></Link>
<Link to="/signin"><button>signin</button></Link>
        <Link to="/add" ><button className="btn">add</button></Link>
        <h1 className="head">Game<span>Hub</span></h1>
          <input type="text"
          onChange={this.props.searchhandler}
          value={this.props.term}
          placeholder="search for ur favourite game"
          ></input>
          
        </form>
        
        </div>
    }
}
export default Nav