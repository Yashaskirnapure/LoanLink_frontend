import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react';
import '../styles/addform.css'
import Header from './header';

const Addlisting = () => {
  return (
    <div className='wallpaper dark-tint'>
        <Header />
        <div className="add-form">
            <FormControl
                borderRadius={'30px'}
                backgroundColor={'white'}
                height={'500px'}
                width={'500px'}
                padding={'30px'}
                margin={'30px'}
            >
                <Input type='email' />
                <Input type='email' />
                <Input type='email' />
            </FormControl>
        </div>
    </div>
  )
}

export default Addlisting