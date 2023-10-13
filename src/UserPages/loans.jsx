import React, { useEffect } from 'react'
import axios from '../api/axios';
import { SimpleGrid, Heading } from '@chakra-ui/react';
import LoanListing from './loanlisting';
import { useState } from 'react';
import '../styles/loans.css'
import { IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Header from './header';

const Loans = () => {

  const [loanList, setLoanList] = useState([
    {
      id: 1,
      title: 'Personal Loan',
      description: 'A personal loan can be used for any purpose, such as debt consolidation, home improvement, or unexpected expenses.',
    },
    {
      id: 2,
      title: 'Business Loan',
      description: 'A business loan can be used to start a new business, expand an existing business, or purchase equipment.',
    },
    {
      id: 3,
      title: 'Student Loan',
      description: 'A student loan can be used to pay for tuition, fees, and other expenses associated with college or university.',
    },
    {
      id: 1,
      title: 'Personal Loan',
      description: 'A personal loan can be used for any purpose, such as debt consolidation, home improvement, or unexpected expenses.',
    },
    {
      id: 2,
      title: 'Business Loan',
      description: 'A business loan can be used to start a new business, expand an existing business, or purchase equipment.',
    },
    {
      id: 3,
      title: 'Student Loan',
      description: 'A student loan can be used to pay for tuition, fees, and other expenses associated with college or university.',
    }
  ]);

  return (
    <div className='loans-list'>
      <Header />
      <SimpleGrid 
        width={'70vw'} padding={10} margin={5}
        columns={1} spacing={4}
        alignContent={'center'}>
        {loanList.map((item) => {
            return (<LoanListing
              listing={item}
              key={item.id}
            />)
        })}
      </SimpleGrid>
    </div>
  )
}

export default Loans;