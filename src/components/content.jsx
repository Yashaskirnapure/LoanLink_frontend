import React from 'react'
import '../styles/content.css'
import one from "../public/one.webp"
import two from "../public/two.webp"
import FAQ from './faq'

function Content() {
  return (
    <section className='content' id='content'>
        <div className='tuple'>
            <div className='wrapper'>
                <div className='image'>
                    <img src={one} alt="" />
                </div>
            </div>
            <div>
                <h3 className='tuple-heading first'>Get Loans at Low Rate of Interest</h3>
                <p className='text'>LoanLink eliminates the possibility of having a middleman in the lending process     and hence no extra commisions.</p>
            </div>
        </div>
        <div className='tuple'>
            <div>
                <h3 className='tuple-heading second'>Security first and Second</h3>
                <p className='text'>
                    LoanLink ensures that all your personal data and transactions are encrypted and secured so whats yours remains yours.
                </p>
                <p className='text'>
                    There's no room for mistakes because we did'nt leave any.
                </p>
            </div>
            <div className='wrapper'>
                <div className='image'>
                    <img src={two} alt="" />
                </div>
            </div>
        </div>
        <FAQ />
    </section>
  )
}

export default Content