import React ,{Component}from 'react';
import axios from 'axios'

class Signin  extends Component{
    constructor(){
        super();
        this.handlesubmit = this.handlesubmit.bind(this)
    }
     
     handlesubmit = event =>{
         event.preventDefault();
         const names = event.target.elements.names.value;
         const photos = event.target.elements.photo.value;
         
         
         const game = {
             email:String(names),
             password:String(photos),
             
             
         }
        
        
         axios.post('http://localhost:5000/api/auth', game, {
         headers: {
             'Content-Type': 'application/json'
         }
 })
 .then(response => { 
     console.log(response)
     
     this.props.push()

 })
 .catch(error => {
     console.log(error.response)
 });

 
 
     };
 render(){
     return(
        <div className="container11">
            <div className="small">
                 <form onSubmit={this.handlesubmit}>
                     <input type="text" name="names" className="in" placeholder="Name"></input>
                     <input type="password" name="photo" className="in" placeholder="password"></input>
                     
                     
                     <button type="submit" className="btnxD">add</button>
                 </form>
            </div>
        </div>
     )
 }
 }
 export default Signin
    
