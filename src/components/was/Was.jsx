import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import rasm from '/image.svg';

export const Was = () => {
  return (
    <div className='was'>
        <div className='container'>
            <div className='was__wrapper'>

            <div className='was__card gt'>
    <img className='was__img' src={rasm} alt="foto" />
</div>

<div className='was__card'>
<p className='was__title'>Clean and fragrant soy wax</p>
<p className='was__item'>Made for your home and for your wellness</p>

<div className='was__box'>
<CiCircleCheck className='was__icon'/>
    <p className='was__text'>Eco-sustainable:All recyclable materials, 0% CO2 emissions</p>
</div>

<div className='was__box'>
<CiCircleCheck className='was__icon'/>
    <p className='was__text'>Hyphoallergenic: 100% natural, human friendly ingredients </p>
</div>

<div className='was__box'>
<CiCircleCheck className='was__icon'/>
    <p className='was__text'>Handmade: All candles are craftly made with love.</p>
</div>

<div className='was__box'>
<CiCircleCheck className='was__icon'/>
    <p className='was__text'>Long burning: No more waste. Created for last long.</p>
</div>
<button className='was__btn'>Learn more</button>
</div>

<div className='was__card gtr'>
    <img className='was__img' src={rasm} alt="foto" />
</div>

            </div>
            </div>

    </div>
  )
}
