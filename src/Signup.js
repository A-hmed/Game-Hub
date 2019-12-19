import React ,{Component}from 'react';
import axios from 'axios'

class Signup  extends Component{
    constructor(){
        super();
        this.handlesubmit = this.handlesubmit.bind(this)
    }
     
     handlesubmit = event =>{
         event.preventDefault();
         const names = event.target.elements.names.value;
         const photos = event.target.elements.photo.value;
         const prices =  event.target.elements.price.value;
         
         const game = {
             name:String(names),
             email:String(prices),
             password:String(photos),
             
         }
         console.log(game)
        
         axios.post('http://yourherokuapp/api/users', game, {
         headers: {
             'Content-Type': 'application/json'
         }
 })
 .then(response => { 
     console.log(response)
 })
 .catch(error => {
     console.log(error.response)
 });
 console.log(game)
 
 
     };
 render(){
     return(
        <div className="container11">
            <div className="small">
                 <form onSubmit={this.handlesubmit}>
                     <input type="text" name="names" className="in" placeholder="Name"></input>
                     <input type="text" name="price" className="in" placeholder="email"></input>
                     <input type="password" name="photo" className="in" placeholder="email"></input>
                     
                     <button type="submit" className="btnxD">add</button>
                 </form>
            </div>
        </div>
     )
 }
 }
 export default Signup
    
