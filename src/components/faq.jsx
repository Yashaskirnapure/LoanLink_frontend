import React, { useState } from "react";
import "../styles/faq.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

function FAQ() {

  return (
    <div className="FAQ">
      <h1 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h1>
      <Carousel 
        className="carousel"
        showArrows={true}
        stopOnHover={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        autoPlay
        interval={4000}
        infiniteLoop={true}
      >
        <div className="cr-item">
            <p className="question">How does LoanLink manage the risk of default?</p>
            <p className="answer">
                LoanLink follows a robust credit assessment policy to bring only the most creditworthy borrowers to the platform. We categorize borrowers by risk and allocate funds in a manner that reduces the risk of capital erosion for our investors. In higher risk categories, we invest as little as ₹100 per loan account and go only as high as ₹5,000 in low risk categories.
            </p>
        </div>
        <div className="cr-item">
            <p className="question">How hands-on do I have to be to invest with LoanLink?</p>
            <p className="answer">
                LoanLink allows you to either manually screen and select your investments on our platform or opt for the Auto-investment. In the latter, our proprietary borrower selection algorithm takes into account your risk tolerance and accordingly create a portfolio that gives you the best possible return on investment.
            </p>
        </div>
        <div className="cr-item">
            <p className="question">What if LoanLink closes its doors?</p>
            <p className="answer">
                We’ve been around since the beginning of P2P investment in India, and plan to stay around for a long, long time. If due to unforeseen circumstances, we are forced to close our doors for business, all loan agreements will still be valid as they have been signed between the respective investors and borrowers.
            </p>
        </div>
      </Carousel>
    </div>
  );
}

export default FAQ;
