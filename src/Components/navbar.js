import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import navbar from './Navbar.css'

function Navbar() {
const [click, setClick] = useState(false)
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu= () => setClick(false)

const showButton = () => {
  if(window.innerwidth <= 960) {
    setButton(false);
  } else{
    setButton(true);
  }
};

useEffect(() => {
  showButton()
},[]);

window.addEventListener('resize', showButton)

  return (
    <div>
        <nav className= "navbar">
            <div classname="navbar-container">
                {/* <Link to="/" className='navbar-logo' onClick= {closeMobileMenu}>
                  Luv Detailing </Link> */}

                {/* <Link to="Home" className=''></Link> */}

                <div className='menu-icon' style={{color:'white'}}  onClick={handleClick}>
                  <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                </div>

                <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                  

                {/* <Link to="/" className='navbar-logo' onClick= {closeMobileMenu}>
                <img src='images/LuvDetailingLogoWhiteRESIZE4.png' /> </Link> */}

              <Link to="/" className='navbar-logo' onClick= {closeMobileMenu}>
                <img src='images/Luv Detailing Logo White.png' /> </Link>

                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Schedule Appointment' className='nav-links' onClick={closeMobileMenu}>Schedule Appointment</Link>
                </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>Schedule Appointment</Button>} */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar