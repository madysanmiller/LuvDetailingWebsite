import React from 'react'
import './PGServices.css'

export default function App() {
    return (
      <div className="servicePage">

        <div className="serviceHeader">
        <h1>Services</h1>

        <br></br>

        <h2>
          
          Specific services can be negotiated beyond what is listed. 
          <br></br>
          <br></br>
          We use quality chemicals only, we do not use cut-rate supplies that can harm you, your
          loved ones, or us.
        </h2>
  
       <br></br>
        
        </div>

        <div className='ServiceFlex'>

       

        <div className="Basic">
          <h2> Standard Interior/Exterior Detail: </h2>
          
          <h3>
            <div>-Wash and Detail Exterior</div>
            <div>-Vacuum Carpet and Seats</div>
            <div>-Clean Touch Surfaces</div>
            <div>-Streak Free Clean Windows</div>
          </h3>
          
          <br></br>
          <br></br>
        <div className='Pricing' style={{border: '2px solid white'}}>
          
        Package Pricing:
          
          <br></br>

          Small Car: $160

          <br></br>

          Medium Car/Crossover Suv: $180

          <br></br>

          Truck:$200
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="Full">
          <h2>Full Interior/Exterior Detail:</h2>

          <h3> 
            <div>-Wash and Detail Exterior</div>
            <div>-Vacuum Carpet and Seats</div>
            <div>-Clean Touch Surfaces</div>
            <div>-Streak Free Clean Windows</div>
            <div>-Wax and Clay Bar Exterior</div>
            <div>-Shampoo and Treat Carpet</div>
            <div>-Seats and Stain Removal</div>
            <div>-Steam Clean Touch Points</div>
           </h3>

          <br></br>
          <br></br>

        <div className='Pricing' style={{border: '2px solid white'}}>
          
        Package Pricing:
          
          <br></br>
          
          Small Car: $240

          <br></br>

          Mediun Car/Crossover Suv: $260

          <br></br>

          Truck: $280
          </div>
          <br></br>
          <br></br>
        </div>
        </div>
        <br></br>
        <br></br>

        <div className="Qutoes">
          We also offer complete interior and exterior protection packages and
          ceramic coatings. Please contact for a quote as many factors determine
          price{" "}
          
        </div>
      </div>
    );
  }