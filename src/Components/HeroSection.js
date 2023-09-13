import React from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){
    return(
        <div className="hero-container">
          <img src='images/RedHood.jpg' />
          {/* <img src='images/LuvDetailingLogo.png' /> */}
             {/* <h1>Luv Detailing</h1> */}
             <h1><img src='images/Luv Detailing Logo White.png' /></h1>
      <p> </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
        </div>
    )
}

export default HeroSection