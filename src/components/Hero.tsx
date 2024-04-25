import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
      <div className="main">
          <nav>
              <span><Image
                  src={"/assets/images/logo.svg"}
                  alt="logo"
                  width={72}
                  height={62}
              />
              </span>
              <div className='top-btn'>
                  <button className="btn">English</button>
                  <button className="btn btn-red-sm">Sign In</button>
              </div>
          </nav>
          <div className="box">

          </div>
          <div className="hero">

              <span>Unlimited movies, TV shows and more</span>
              <span>Watch anywhere. Cancel anytime.</span>

              <span>Ready to watch? Enter your email or mobile number to create or restart your membership.</span>
              <div className="hero-buttons">
                  <input type="text" placeholder="Email or mobile number" />
                  <button className="btn btn-red">Get Started &gt;</button>
              </div>

          </div>
          <div className="separation"></div>
      </div>
  )
}

export default Hero
