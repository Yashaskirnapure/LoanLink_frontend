import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text, Stack, VStack, StackDivider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box} from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../styles/userHome.css'

const UserHome = () => {
  {/*const user = localStorage.getItem('user')*/}

  const logout = (e) => {
    {/*localStorage.removeItem('user')*/}
    console.log("logout")
  }

  return (
    <div className='user-home background-tint'>
      <SimpleGrid 
        spacing={10}
        templateColumns='repeat(auto-fill, minmax(400px, 1fr))'
        padding={6}
        textAlign={'center'}
      >
      <Card
        borderRadius={40}
        className='user-card'
        align={'center'}
      >
        <CardHeader>
          <Heading size='xl'>Credit Score</Heading>
        </CardHeader>
        <CircularProgress value={70} size='150px'>
          <CircularProgressLabel size='md'>70</CircularProgressLabel>
        </CircularProgress>
        <CardBody
          textAlign={'left'}
        >
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Fullname
              </Heading>
              <Text pt='2' fontSize='2xl'>
                Yashas Kirnapure
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Email
              </Heading>
              <Text pt='2' fontSize='2xl'>
                yashas.kirnapure@gmail.com
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Credit Score
              </Heading>
              <Text pt='2' fontSize='2xl'>
                -----
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <Link to={'/login'}>
            <Button onClickCapture={logout}>Logout</Button>
          </Link>
        </CardFooter>
      </Card>
      <VStack paddingTop={5} paddingBottom={5} spacing={10}>
        <Card width={'100%'} height={'45%'} borderRadius={40}>
          <CardHeader>
            <Heading size='lg'> Browse Loan Listings </Heading>
          </CardHeader>
          <CardBody textAlign={'left'}>
            <Text>View a list of loans available.</Text>
          </CardBody>
          <CardFooter>
            <Button>
              <Link to={'/list'}>View here</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card width={'100%'} height={'45%'} borderRadius={40}>
          <CardHeader>
            <Heading size='lg'>Add Loan Listing</Heading>
          </CardHeader>
          <CardBody textAlign={'left'}>
            <Text>View a list of loans available.</Text>
          </CardBody>
          <CardFooter>
            <Button>
              <Link to={'/list'}>View here</Link>
            </Button>
          </CardFooter>
        </Card>
      </VStack>
      <VStack paddingTop={5} paddingBottom={5} spacing={10}>
        <Card width={'100%'} height={'45%'} borderRadius={40}>
          <CardHeader>
            <Heading size='lg'> Check Loan Status</Heading>
          </CardHeader>
          <CardBody textAlign={'left'}>
            <Text>Check the status of loans you are funding.</Text>
          </CardBody>
          <CardFooter>
            <Button>
              <Link to={'/status '}>View here</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card 
          width={'100%'}
          height={'45%'}
          borderRadius={40}
        >
          <CardHeader>
            <Heading size='lg'> Check Loan Status</Heading>
          </CardHeader>
          <CardBody textAlign={'left'}>
            <Text>Check the status of loans you are funding.</Text>
          </CardBody>
          <CardFooter>
            <Button>
              <Link to={'/status '}>View here</Link>
            </Button>
          </CardFooter>
        </Card>
      </VStack>
    </SimpleGrid>
    </div>
  )
}

export default UserHome