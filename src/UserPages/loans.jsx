import React, { useEffect } from 'react'
import axios from '../api/axios';
import { SimpleGrid, Heading } from '@chakra-ui/react';
import LoanListing from './loanlisting';
import { useState } from 'react';
import '../styles/loans.css'
import Header from './lender_header';

const Loans = () => {

  const [loanList, setLoanList] = useState([
    {
      id: 1,
      title: 'Personal Loan',
      borrower: 'Yashas',
      amount: 1000,
      term: '36 days'
    },
    {
      id: 2,
      title: 'Educational Loan',
      borrower: 'Yashas',
      amount: 1000,
      term: '36 days'
    },
    {
      id: 3,
      title: 'Personal Loan',
      borrower: 'Yashas',
      amount: 1000,
      term: '36 days'
    },
    {
      id: 4,
      title: 'Educational Loan',
      borrower: 'Yashas',
      amount: 1000,
      term: '36 days'
    }
  ]);

  return (
    <div className='loans-list wallpaper dark-tint'>
      <Header />
      <div className="listing">
        {loanList.map((item) => {
            return (
            <LoanListing
              listing={item}
              key={item.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Loans;