
import React , {Component,useState,useEffect} from 'react';



function Gamepage(){
 var game = {}
useEffect(() => {
    fetchItem();
},[]);

const[item,setitem] = useState({});
const fetchItem = async () => {                 
    const fetchItem  = await fetch(`http://localhost:5000/api/products`);
    const item  = await fetchItem.json();
   setitem(item);

    
};
for(var i=0;i<item.length;i++){
    if(item[i]._id === window.location.pathname.substr(1)){
        game = item[i] ;
    
    }
}

return(
<div>
  <div className="container">
            <div className="box">
                <div className="img">
              
                <img className="imag" src={game.photo}></img>
                </div>
                <div className="desc">
                <h1>{game.name}</h1>
                    <h3>LE 999.00</h3>
                    <h6>DESCRIPTION</h6>
                    <p>Get the pickaxe and amaze your friends and enemies!
                        The Pickaxe, also known as a harvesting tool, 
                        is a tool that players can use to mine
                         and break materials in the world of Fortnite.
                    </p>
                    <p>
                            In the visceral and dramatic single-player story campaign, 
                            the stakes have never been higher as players take on the role of 
                            lethal Tier One operators in a heart-racing 
                            saga that will affect the global balance of power.
                    </p>
                    <p>Experience the ultimate online playground
                         with classic multiplayer.
                    </p>
                    <p>Squad-up and play cooperatively 
                        in a collection of elite 
                        operations accessible to all skill levels
                    </p>
                    
                        <a href= {game.description}>Add To Cart</a>
                        

                        
                    
                </div>
            </div>
      </div>

      <div className="container">
        <div className="box">
                <h1 className="mag">Description</h1>
                <p className="mag">Whether you're playing Solo or Co-op with friends, 
                    League of Legends is a highly competitive, fast paced action-strategy
                     game designed for those who crave a hard fought victory.
                </p>
                <p className="mag">Purchase Call of Duty®: Modern Warfare® on 
                    digital and receive the in-game XRK Weapons Pack for day 1 launch use.
                     The XRK M4 assault rifle and XRK .357 handgun are built to be fast,
                      accurate and hard hitting,
                     giving you versatile options adaptable to any playstyle.
                </p>
                <p className="mag">
                        In Call of Duty®: Modern Warfare®, 
                        players will be thrust into an immersive 
                        narrative spanning the entire game.  
                        Experience the ultimate online playground with 
                        classic multiplayer, or squad-up and play 
                        cooperatively in a collection of elite operations 
                        accessible to all skill levels.
                </p>
                <p className="mag">
                        he stakes have never been higher as players take 
                        on the role of lethal Tier One operators in a
                         heart-racing saga that will affect the global balance of power.
                          Call of Duty®: Modern Warfare® engulfs fans in an incredibly raw,
                           gritty, provocative narrative that brings unrivaled intensity and 
                           shines a light on the changing nature of modern war. Developed by
                            the studio that started it all, Infinity Ward delivers an epic
                             reimagining of the iconic Modern Warfare® 
                        series from the ground up.
                </p>
                <p className="mag">
                        © 2019 Activision Publishing,
                         Inc. ACTIVISION, CALL OF DUTY, 
                         CALL OF DUTY BLACK OPS and MODERN WARFARE are
                          trademarks of Activision Publishing, Inc. All 
                          other trademarks and trade names 
                        are the properties of their respective owners
                </p>
            </div>     
        </div>
        <div className="container">
            <div className="box">
                    <h1 className="mag">{game.name +" System Requirements (Minimum)"}</h1>
                    <ul className="mag">
                        <li>
                            CPU SPEED: 3 GHz processor (supporting SSE2 instruction set or higher)
                        </li>
                        <li>
                            RAM: 2 GB
                        </li>
                        <li>
                            OS: Windows 7, Windows 8, or Windows 10 
                            (Windows XP and Vista are no longer officially supported by Riot)
                        </li>
                        <li>
                            VIDEO CARD: Shader version 2.0 capable video card
                        </li>
                        <li>
                            FREE DISK SPACE: 8 GB
                        </li>
                    </ul>
                    <h1 className="mag">{game.name +" System Recommended Requirements"}</h1>
                    <ul className="mag">
                        <li>
                            CPU SPEED: 3 GHz Dual-Core processor
                        </li>
                        <li>
                            RAM: 4 GB
                        </li>
                        <li>
                            OS: Windows 7, Windows 8, or Windows 10 
                            (Windows XP and Vista are no longer officially supported by Riot)
                        </li>
                        <li>
                                VIDEO CARD: Nvidia GeForce 8800/AMD Radeon HD 
                                5670 or equivalent video card 
                                (Dedicated GPU with 512MB or higher Video Memory(VRAM))
                        </li>
                        <li>
                            FREE DISK SPACE: 12 GB
                        </li>
                    </ul>
                </div>     
            </div>
      
      
        </div>
);
}

export default Gamepage