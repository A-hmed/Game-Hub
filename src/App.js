import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Nav from './Nav'
import Gamegrid from './Gamegrid';
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch,Link} from 'react-router-dom';
import Gamepage from './Gamepage';
import axios from 'axios';
import Addgame from './Addgame'
import Signup from './Signup'
import Signin from './Signin'




class App extends Component{
  constructor(props){
    super(props);
this.state = {
  people:[],
  term:'',
  user:{},
  in:false
}
this.searchhandler = this.searchhandler.bind(this);

}
searchhandler(e){
this.setState({term:e.target.value})
}
componentDidMount(){
 
 axios.get('http://localhost:5000/api/products').then(res =>{
   this.setState({
     people:res.data
   })
 });

 
}





render(){
  console.log(this.state.users)
  console.log(this.state.people)
  this.state.current=window.location.pathname
  
  const {people} = this.state;
  return (<BrowserRouter>
    <div className="all">
    
      <Switch>
        {
          
      <Route exact path="/signin" render={({history}) =>  (  <Signin  user={this.state.user} push = {push =>{history.push('./')} }></Signin>)}></Route>}
<Route exact path="/sign" render={({history}) =>(<Signup push = {push =>{history.push('./')}}></Signup>)}></Route>
        <Route exact path="/add" render={({history}) => (
        <Addgame push = {push =>{history.push('./')}}></Addgame>
        )}></Route>
    <Route exact path="/" render={() => (
      <div className="App main">
       
       <Nav trem={this.state.term} searchhandler={this.searchhandler}/>
       <Gamegrid people={this.state.people}  term={this.state.term} ></Gamegrid>
       <div className="clear"></div> 
           <Footer/>                
           </div>
          )}></Route>

<Route exact path={"/:id"} render={() => (
      <div className="App notmain">
    <Nav trem={this.state.term} searchhandler={this.searchhandler}/>
    <Gamepage people={this.state.people} ></Gamepage>
    <Footer/>   
    </div>
          )}></Route>
          </Switch>

</div>
    </BrowserRouter>
  );
}

}


function simulatedb(){
  return [
    {id:0,
        first:'call of duty',
        discreption:'Fps',
        releasedate:'20/10/1999'  ,
            
    },
    {id:1,
      first:'league of legends',
      discreption:'moba',
      releasedate:'20/10/2003'
      
  },{id:2,
    first:'assassins creed',
    discreption:'open world',
      releasedate:'20/10/2007'
  },{id:3,
    first:'control',
    discreption:'puzzels',
      releasedate:'20/10/2019'
  },
  {
    id:4,
    first:'CS-GO',
    discreption:'fps',
      releasedate:'20/10/2005'
  },
  {
    id:5,
    first:'watch dog',
    discreption:'open world',
      releasedate:'20/10/2013'
  }
  
  ]
}


export default App;
