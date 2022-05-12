import React from 'react'
import './Hero.css'
import heroImg from '../../images/image-hero-desktop.png'
import cliente1 from '../../images/client-audiophile.svg'
import cliente2 from '../../images/client-databiz.svg'
import cliente3 from '../../images/client-maker.svg'
import cliente4 from '../../images/client-meet.svg'

const Hero = () => {
  return (
    <div className="hero">
      <div className='hero__container'>
        <div className='hero__content'>
          <h1>Make <br /> remote work</h1>
          <p>get your team in sync, no matter your location. <br />Streamline processes, create team rituals, and <br />watch productivity soar.</p>
          <a class="hero__cta" href="">Learn more</a>
          <div className='hero__brands'>
            <img src={cliente2} alt="" />
            <img src={cliente1} alt="" />
            <img src={cliente4} alt="" />
            <img src={cliente3} alt="" />
          </div>
        </div>
        <div className='hero__image'>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero