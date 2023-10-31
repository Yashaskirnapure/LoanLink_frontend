import React from 'react'
import Header from './lender_header'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Heading, Stack, Box, Text, StackDivider } from '@chakra-ui/react'
import '../styles/status.css'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const LenderStatus = () => {
  return (
    <>
      <div className=''>
        <Header />
        <div className="status-page">
            <Card
              width={'70%'}
              borderRadius={'30px'}
            >
              <CardHeader>
                <Heading size='xl' textAlign={'center'}>Loan Status</Heading>
              </CardHeader>
              <Box margin={'auto'}>
                <CircularProgress 
                  value={40}
                  color='green.400'
                  size='150px'
                >
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Box>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='3'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Lender ID
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      102103726
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Borrower ID
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      102103726
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