import React from 'react'
import Header from './lender_header'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Heading, Stack, Box, Text, StackDivider } from '@chakra-ui/react'
import '../styles/status.css'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const LenderStatus = () => {
  return (
    <>
      <div className='status-body'>
        <Header />
        <div className="status-page">
            <Card
              width={'70%'}
              borderWidth={'1px'}
              borderColor={'gray'}
              borderRadius={'30px'}
              padding={8}
            >
              <CardHeader>
                <Heading size='xl' textAlign={'center'}>Loan Status</Heading>
              </CardHeader>
              <Box margin={'auto'}>
                <CircularProgress 
                  value={40}
                  color='blue.400'
                  size='150px'
                >
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Box>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='3'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Borrower Name
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      Yashas
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Term ends in
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      36 days
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Total amount
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      1000
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Amount left to be replayed
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      300
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </div>
      </div>
    </>
  )
}

export default LenderStatus