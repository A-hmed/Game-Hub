import React , {Component} from 'react';
import axios from 'axios';

class Addgame extends Component{
   constructor(){
       super();
       this.handlesubmit = this.handlesubmit.bind(this)
   }
    
    handlesubmit = event =>{
        event.preventDefault();
        const names = event.target.elements.names.value;
        const photos = event.target.elements.photo.value;
        const prices =  event.target.elements.price.value;
        const description =  event.target.elements.description.value;
        const game = {
            name:String(names),
            price:String(prices),
            photo:String(photos),
            description:String(description)
        }
        console.log(game)
       
        axios.post('http://localhost:5000/api/products', game, {
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
this.props.push();
window.location.reload();

    };
render(){
    return(
       <div className="container11">
           <div className="small">
                <form onSubmit={this.handlesubmit}>
                    <h1 className="lab">Add Game</h1>
                    <input type="text" name="names" className="in" placeholder="Name"></input>
                    <input type="text" name="price" className="in" placeholder="DESC"></input>
                    <input type="text" name="photo" className="in" placeholder="SRC"></input>
                    <input type="text" name="description" className="in" placeholder="Game Link"></input>
                    <button type="submit" className="btnxD">add</button>
                </form>
           </div>
       </div>
    )
}
}
export default Addgame