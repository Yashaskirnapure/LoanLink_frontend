import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text, Stack, VStack, StackDivider } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box, Image } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import Header from './header'
import { SemiCircleProgress } from 'react-semicircle-progressbar';
import { Link } from 'react-router-dom'

import '../styles/userHome.css'
import profilePic from '../public/profile.png'

const Borrower = () => {
  {/*const user = localStorage.getItem('user')*/}

  const logout = (e) => {
    {/*localStorage.removeItem('user')*/}
    console.log("logout")
  }

  return (
    <main className='wallpaper dark-tint'>
      <Header/>
      <div className='home-wrapper'>
        <Card
          backgroundColor={'black'}
          color={'white'} 
          className='card'
          margin={'10px'}
          height={'600px'}
          width={'500px'}
          borderRadius={40}
          align={'center'}
          borderWidth={'1px'}
          opacity={'50%'}
        >
          <CardHeader>
            <Heading
              size='2xl'
              marginBottom={'20px'}
            >
              Dashboard
            </Heading>
          </CardHeader>
          <Box
            boxSize='sm'
            align={'center'}
          >
            <Image
              boxSize='150px'
              borderRadius={'50%'}
              src={profilePic} 
              alt='my-pfp'
            />
          </Box>
          <CardBody
            textAlign={'left'}
            width={'400px'}
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
            backgroundColor={'black'}
            color={'white'}
            className='user-card card'
            margin={'auto'}
            height={'250px'}
            width={'90%'}
            borderRadius={'20px'}
            opacity={'50%'}
            borderWidth={'1px'}
          >
            <Heading
              size='xl'
              padding={'5px'}
            >
              Your Credit Report
            </Heading>
            <div className="report">
              <SemiCircleProgress
                percentage={80}
                size={{
                  width: 200,
                  height: 200,
                }}
                strokeWidth={10}
                strokeColor="blue"
              />
              <Card
                margin={'15px'}
                marginTop={'0px'}
                marginBottom={'0px'}
                width={'250px'}
                backgroundColor={'black'}
                color={'white'}
              >
                <CardBody>
                  <Stack divider={<StackDivider />} spacing='1'>
                    <Box>
                      <Heading size='xm' textTransform='uppercase'>
                        Credit Score
                      </Heading>
                      <Text pt='2' fontSize='md'>
                        300
                      </Text>
                    </Box>
                    <Box>
                      <Heading size='xm' textTransform='uppercase'>
                        payment history
                      </Heading>
                      <Text pt='2' fontSize='md'>
                        95%
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </div>
          </Card>
            <div className='loan-card'>
                <Card
                      backgroundColor={'black'}
                      color={'white'} 
                      borderRadius={'30px'}
                      width={'47%'}
                      height={'98%'}
                      opacity={'50%'}
                      borderWidth={'1px'}
                >
                  <CardHeader>
                    <Heading 
                      size='md'
                      textAlign={'center'}
                    >
                      Loan Status
                    </Heading>
                  </CardHeader>
                  <CardBody className='status-bar'>
                    <CircularProgress
                      value={80}
                      size={'135px'}
                      color='green'
                    >
                      <CircularProgressLabel>
                        80%
                      </CircularProgressLabel>
                    </CircularProgress>
                  </CardBody>
                  <CardFooter>
                    <Button>View here</Button>
                  </CardFooter>
                </Card>
                <Card
                    backgroundColor={'black'}
                    color={'white'}
                    width={'47%'}
                    height={'98%'}
                    borderRadius={'30px'}
                    opacity={'50%'}
                    borderWidth={'1px'}
                >
                  <CardHeader>
                    <Heading
                      size='md'
                      textAlign={'center'}
                    >
                      Add Loan Listing
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>View summary</Text>
                  </CardBody>
                  <CardFooter>
                    <Link to={'/add'}>
                      <Button>View here</Button>
                    </Link>
                  </CardFooter>
                </Card>
            </div>
        </VStack>
      </div>
    </main>
  )
}

export default Borrower