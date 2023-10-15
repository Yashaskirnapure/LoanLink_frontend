import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text, Stack, VStack, StackDivider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box, Image } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import Header from './header'
import SemiCircleProgressBar from "react-progressbar-semicircle";
import '../styles/userHome.css'
import profilePic from '../public/profile.png'

const Borrower = () => {
  {/*const user = localStorage.getItem('user')*/}

  const logout = (e) => {
    {/*localStorage.removeItem('user')*/}
    console.log("logout")
  }

  return (
    <main>
      <Header/>
      <div className='home-wrapper'>
        <Card
          margin={'10px'}
          height={'600px'}
          width={'400px'}
          borderRadius={40}
          align={'center'}
          borderWidth={'2px'}
        >
          <CardHeader>
            <Heading size='2xl'>Dashboard</Heading>
          </CardHeader>
          <Box
            boxSize='sm'
            align={'center'}
          >
            <Image 
              borderRadius={'50%'}
              src={profilePic} 
              alt='my-pfp' />
          </Box>
          <CardBody
            textAlign={'left'}
          >
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Fullname
                </Heading>
                <Text pt='2' fontSize='2xl'>
                  John Doe
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Email
                </Heading>
                <Text pt='2' fontSize='2xl'>
                  John.Doe@gmail.com
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Rating
                </Heading>
                <Text pt='2' fontSize='2xl'>
                  -----
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <VStack
          className='card-stack'
          margin={'10px'}
          width={'600px'}
          height={'600px'}
        >
          <Card
            className='user-card'
            margin={'auto'}
            height={'250px'}
            width={'90%'}
            borderRadius={'20px'}
            borderWidth={'2px'}
          >
            <Heading
              size='xl'
              padding={'5px'}
            >
              Your Credit Report
            </Heading>
            <div className="report">
              <SemiCircleProgressBar
                stroke={'blue'}
                strokeWidth={'15'}
                percentage={33}
                diameter={200}
                padding={'10px'}
              />
              <Card
                margin={'15px'}
                marginTop={'0px'}
                marginBottom={'0px'}
                width={'250px'}
              >
                <CardBody>
                  <Stack divider={<StackDivider />} spacing='2'>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        Credit Score
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        300
                      </Text>
                    </Box>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        payment history
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        95%
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </div>
          </Card>
          <Card
            className='user-card'
            borderRadius={'20px'}
            height={'300px'}
            margin={'auto'}
            width={'90%'}
            borderWidth={'2px'}
          >
            <Heading
              size='xl'
            >
              Loan Status
            </Heading>
            <div className='loan-card'>
                <Card width={'48%'}>
                  <CardHeader>
                    <Heading size='sm'> Customer dashboard</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>View summary.</Text>
                  </CardBody>
                  <CardFooter>
                    <Button>View here</Button>
                  </CardFooter>
                </Card>
                <Card width={'48%'}>
                  <CardHeader>
                    <Heading size='sm'> Customer dashboard</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>View summary</Text>
                  </CardBody>
                  <CardFooter>
                    <Button>View here</Button>
                  </CardFooter>
                </Card>
            </div>
          </Card>
        </VStack>
      </div>
    </main>
  )
}

export default Borrower