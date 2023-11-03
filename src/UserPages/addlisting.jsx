import React from 'react';
import axios from 'axios';
import {
  Field,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightAddon
} from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useState } from "react";
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import "react-toastify/dist/ReactToastify.css";
import '../styles/addform.css'
import Header from './borrower_header';
import { useToast } from '@chakra-ui/react'

const Addlisting = () => {
  const toast = useToast()
  const [ title, setTitle ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ term, setTerm ] = useState(1)
  const [ interest, setInterest ] = useState(1)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, term, amount, interest)
    if(title === ''){
      toast({
          title: 'Error',
          description: "Please input all fields.",
          status: 'error',
          duration: 4000,
          isClosable: true,
      })
      return;
    }

    try {
      const response = await axios.post(
        /*backend api*/
        JSON.stringify({title, amount, term, interest}),{
          headers: { 'Content-Type' : 'application/json'},
          withCredentials: true
        }
      )

      console.log(response.data);
      console.log(response.accessToken);
      toast({
          title: 'Loan added successfully.',
          status: 'success',
          duration: 4000,
          isClosable: true,
      })
    } catch (err) {
      toast({
          title: 'Error',
          description: "Something went wrong. Please try again.",
          status: 'error',
          duration: 4000,
          isClosable: true,
      })
    }
    setTitle('')
    setAmount(0)
    setInterest(0)
    setTerm(0)
  }

  return (
    <div className=''>
        <Header />
        <div className="add-form">
            <FormControl
                borderWidth={'2px'}
                borderRadius={'30px'}
                backgroundColor={'white'}
                width={'50vw'}
                padding={'30px'}
                margin={'30px'}
            >


                <Heading
                  textAlign={'center'}
                  marginBottom={'20px'}
                >
                  Loan Details
                </Heading>


                <Text fontSize={'1.4rem'}>Loan title: </Text>
                <Input 
                  type='text'
                  marginBottom={'30px'}
                  onChange={
                    (e) => {setTitle(e.target.value)
                  }}
                />


                
                <Text fontSize={'1.4rem'}>Loan Amount: </Text>
                <NumberInput
                  step={100}
                  defaultValue={0}
                  min={0} max={10000}
                  marginBottom={'30px'}
                  onChange={
                    (input) => {setAmount(input)}
                  }
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>





                <Text fontSize={'1.4rem'}>Loan Term: </Text>
                <InputGroup size='md'>
                  <NumberInput
                    defaultValue={1}
                    min={1} max={10}
                    width={'85%'}
                    marginBottom={'30px'}
                    onChange={
                      (input) => {setTerm(input)
                    }}
                  >   
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <InputRightAddon
                    width={'15%'}
                    children='Years'
                  />
                </InputGroup> 





                <Text fontSize={'1.4rem'}>Interest Rate: </Text>
                <InputGroup>
                  <NumberInput
                    defaultValue={1}
                    min={1} max={30}
                    width={'73%'}
                    marginBottom={'30px'}
                    onChange={
                      (input) => {setInterest(input)}
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <InputRightAddon
                    width={'27%'}
                    children='% per annumm'
                  />
                </InputGroup>






                <Button
                  type='submit'
                  width={'100%'} 
                  colorScheme={'purple'}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
            </FormControl>
        </div>
    </div>
  )
}

export default Addlisting