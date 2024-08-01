import React from 'react'
import logo from '/logo.svg';
import { FaRegUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
function Header() {
  return (
    <div>
           <header className="header" id="header">
        <div className="container">
            <nav className="navbar">
                <img className='navbar__logo' src={logo} alt="foto" />
                <ul className="navbar__collection">
                <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>Discovery</span>
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>About</span>
                        </a>
                    </li>
                
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>Contact us </span>
                        </a>
                    </li>

                </ul>
<div className='navbar__bag'>
    <button className='navbar__btn'>
<FaRegUser className='navbar__icon'/>
</button>
<button className='navbar__btn'>
<FaCartShopping  className='navbar__icon'/>
</button>

</div>
                <div className="navbar__menu">
                   <LuMenu className='navbar__icon'/>
                </div>
            </nav>
        </div>
    </header>

        </div>
  )
}

export default Header