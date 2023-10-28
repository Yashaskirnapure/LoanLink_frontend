import React from 'react';
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
import '../styles/addform.css'
import Header from './header';

const Addlisting = () => {
  const [ title, setTitle ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ term, setTerm ] = useState('')
  const [ interest, setInterest ] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked')
    console.log(title, amount, term, interest);
  }

  return (
    <div className='wallpaper dark-tint'>
        <Header />
        <div className="add-form">
            <FormControl
                borderRadius={'30px'}
                backgroundColor={'white'}
                width={'600px'}
                padding={'30px'}
                margin={'30px'}
            >


              
                <Heading
                  textAlign={'center'}
                  marginBottom={'20px'}
                >
                  Loan Details
                </Heading>



                <Text fontSize={'xl'}>Loan title: </Text>
                <Input 
                  type='text'
                  marginBottom={'30px'}
                  onChange={
                    (e) => {setTitle(e.target.value)
                  }}
                />


                
                <Text fontSize={'xl'}>Loan Amount: </Text>
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





                <Text fontSize={'xl'}>Loan Term: </Text>
                <InputGroup size='md'>
                  <NumberInput
                    defaultValue={0}
                    min={0} max={10}
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





                <Text fontSize={'xl'}>Interest Rate: </Text>
                <InputGroup>
                  <NumberInput
                    defaultValue={0}
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