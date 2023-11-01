import React from 'react'
import '../styles/banner.css'

function Banner() {
  return (
    <section className = 'banner dark-tint'>
        <h1 className='heading'>
          REVOLUTIONIZE YOUR <span className='white'>LENDING</span> EXPERIENCE
        </h1>
        <div className=''>
            <a href='#footer'>
              <div className='button type2'>
                Get Started
              </div>
            </a>
        </div>
    </section>
  )
}

export default Banner;