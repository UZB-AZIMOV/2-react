import React from 'react'
import svg from '/footer.svg';
import { GiTigerHead } from "react-icons/gi";

export const Footer = () => {
  return (
    <div className='footer'>
    <div className='container'>
        <hr />
        <div className='footer__wrapper'>

<div className='footer__card f'>
<img className='footer__logo' src={svg} alt="foto"/>
<p className='footer__p'>Your natural candle made for your home and for your wellness.</p>
</div>

<div className='footer__card'>
    <p className='footer__title'>Discovery</p>
    <p className='footer__text'>New season</p>
    <p className='footer__text'>Most searched</p>
    <p className='footer__text'>Most selled</p>
</div>

<div className='footer__card'>
    <p className='footer__title'>About</p>
    <p className='footer__text'>Help</p>
    <p className='footer__text'>Shipping</p>
    <p className='footer__text'>Affiliate</p>
</div>

<div className='footer__card'>
    <p className='footer__title'>Info</p>
    <p className='footer__text'>Contact us</p>
    <p className='footer__text'>Privacy Policies</p>
    <p className='footer__text'>Terms & Conditions</p>
</div>
        </div>

        </div>
        <hr className='hr' />
        <div className='footer__bag'>
        <GiTigerHead className='footer__t' />
<p className='footer__item'> Azimov Abduvoris  01.08.2024•/•\•all right reserved. 
</p><GiTigerHead  className='footer__t'/>
</div>
    </div>
  )
}
