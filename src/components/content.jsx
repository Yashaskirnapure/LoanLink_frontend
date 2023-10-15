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
                <div className='image animated'>
                    <img src={one} alt="" />
                </div>
            </div>
            <div className='right animated'>
                <h3 className='tuple-heading first'>Get Loans at <span className='yellow'>Low Rate</span> of Interest</h3>
                <p className='text'>LoanLink eliminates the possibility of having a middleman in the lending process     and hence no extra commisions.</p>
            </div>
        </div>
        <div className='tuple'>
            <div className='animated'>
                <h3 className='tuple-heading second'><span className='yellow'>Security</span> first and Second</h3>
                <p className='text'>
                    LoanLink ensures that all your personal data and transactions are encrypted and secured so whats yours remains yours.
                </p>
                <p className='text'>
                    There's no room for mistakes because we did'nt leave any.
                </p>
            </div>
            <div className='wrapper'>
                <div className='image animated'>
                    <img src={two} alt="" />
                </div>
            </div>
        </div>
        <FAQ />
    </section>
  )
}

export default Content