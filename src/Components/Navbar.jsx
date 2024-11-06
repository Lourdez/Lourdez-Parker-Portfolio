import React from 'react'
import "../Components/style/navbar.css"
import logo from '../../src/assets/logo2.png'
import contactimg from '../../src/assets/contact-me.png'
import { Link} from 'react-scroll';



function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />

      <div className="desktopmenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuitems">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuitems">About</Link>
        <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-80} duration={500} className="desktopmenuitems">Projects</Link>
        <Link activeClass='active' to='Client' spy={true} smooth={true} offset={-80} duration={500} className="desktopmenuitems">Clients</Link>
      </div>
     <Link> <button className="desktopmenubutton" onClick={()=>{
      document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
     }}>
        <img src={contactimg} alt="" className="desktopmenuimg"/>Contact Me
      </button></Link>
    </nav>
  )
}

export default Navbar
 