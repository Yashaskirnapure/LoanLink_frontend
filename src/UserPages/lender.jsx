import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text, Stack, VStack, StackDivider } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box, Image } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import Header from './lender_header'
import { SemiCircleProgress } from 'react-semicircle-progressbar';
import { Link } from 'react-router-dom'

import '../styles/userHome.css'
import profilePic from '../public/profile.png'

const Lender = () => {
  {/*const user = localStorage.getItem('user')*/}

  const logout = (e) => {
    {/*localStorage.removeItem('user')*/}
    console.log("logout")
  }

  return (
    <main className='wallpaper dark-tint'>
      <Header/>
      <div className='home-wrapper'>
        {/*dashboard*/}
        <Card
          backgroundColor={'black'}
          color={'white'} 
          className='card'
          margin={'10px'}
          h={[450, 550, 600]}
          w={[400, 500, 600]}
          borderRadius={40}
          borderWidth={1}
          align={'center'}
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



            {/*profile pic*/}
            <Image
              boxSize={[100, 170, 200]}
              borderRadius={'50%'}
              src={profilePic} 
              alt='my-pfp'
            />
          </Box>


          {/*profile info*/}
          <CardBody
            textAlign={'left'}
            w={[250, 350, 450]}
          >
            <Stack
              divider={<StackDivider />}
              spacing='4'
              w={'auto'}
            >
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
                  Role
                </Heading>
                <Text pt='2' fontSize='2xl'>
                  Lender
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>



        {/*second column*/}
        <VStack
          className='card-stack'
          margin={'10px'}
          w={[300, 500, 600]}
          height={'600px'}
        >



          {/*credit report card*/}
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
                  width: 150,
                  height: 150,
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


          {/*loan related cards*/}
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
                    <Link to={'/lenderstatus'}>
                      <Button>View here</Button>
                    </Link>
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
                      Browse Loan Listings
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>View list of loans available for funding.</Text>
                  </CardBody>
                  <CardFooter>
                    <Link to={'/list'}>
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

export default Lender