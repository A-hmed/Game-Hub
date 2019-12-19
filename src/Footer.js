import React , {Component} from 'react';

class  Footer extends Component{
    render(){
        return  <div className="footer">
          
        <div className = "about dav">
          <h1>About Game<span>Hub</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
        </div>
        <div className="navigate dav">
          <h1>Navigations</h1>
      <ul>
        <li>Home</li>
        <li>categories</li>
        <li>services</li>
        <li>Contact Us</li>
      </ul>
        </div>
        <div className="sub dav">
          <h1>Subscribe Newsletter</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.</p>
          <input className="email" type="email" placeholder="enter email"/>
          <button className="btn">Send</button>
        </div>
      </div>
    }
}
export default Footer