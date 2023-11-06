import React, { useEffect } from 'react'
import axios from '../api/axios';
import LoanListing from './loanlisting';
import { useState } from 'react';
import '../styles/loans.css'
import Header from './lender_header';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import {
  Button,
  Heading
} from '@chakra-ui/react'

const Loans = () => {

  const [loanList, setLoanList] = useState([
    {
      id: 1,
      title: 'Personal Loan',
      borrower: 'Yashas',
      creditRating: 700,
      amount: 1000,
      term: '36 days',
      rate: 10
    },
    {
      id: 2,
      title: 'Educational Loan',
      borrower: 'Yashas',
      creditRating: 780,
      amount: 1000,
      term: '36 days',
      rate: 10
    },
    {
      id: 3,
      title: 'Personal Loan',
      borrower: 'Yashas',
      creditRating: 780,
      amount: 1000,
      term: '36 days',
      rate: 10
    },
    {
      id: 4,
      title: 'Educational Loan',
      borrower: 'Yashas',
      creditRating: 780,
      amount: 1000,
      term: '36 days',
      rate: 10
    },
    {
      id: 1,
      title: 'Personal Loan',
      borrower: 'Yashas',
      creditRating: 780,
      amount: 1000,
      term: '36 days',
      rate: 10
    },
    {
      id: 2,
      title: 'Educational Loan',
      borrower: 'Yashas',
      creditRating: 780,
      amount: 1000,
      term: '36 days',
      rate: 10
    },
    {
      id: 3,
      title: 'Personal Loan',
      borrower: 'Yashas',
      creditRating: 780,
      amount: 1000,
      term: '36 days',
      rate: 10
    },
    {
      id: 4,
      title: 'Educational Loan',
      borrower: 'Yashas',
      creditRating: 780,
      amount: 1000,
      term: '36 days',
      rate: 10
    }
  ]);

  return (
    <div className='loans-list'>
      <Header />
      <div className="listing">
        <Heading textAlign={'center'} marginTop={'20px'}>
          Available Loans
        </Heading>
        <TableContainer
          marginTop={'20px'}
          borderWidth={'1px'}
          borderRadius={'5px'}
          padding={'20px'}
        >
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>S.no.</Th>
                <Th>Borrower</Th>
                <Th>Credit Rating</Th>
                <Th>Loan Title</Th>
                <Th>Loan Amount</Th>
                <Th>Loan Term</Th>
                <Th>Interest Rate</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {loanList.map((item) => {
                return (
                  <Tr>
                    <Td>{item.id}</Td>
                    <Td>{item.borrower}</Td>
                    <Td>{item.creditRating}</Td>
                    <Td>{item.title}</Td>
                    <Td>{item.amount}</Td>
                    <Td>{item.term}</Td>
                    <Td>{item.rate}</Td>
                    <Td>
                      <Button width={'130px'} colorScheme={'facebook'}>Accept</Button>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default Loans;