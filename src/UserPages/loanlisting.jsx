import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Stack, StackDivider } from '@chakra-ui/react'

const LoanListing = ({ listing }) => {
  return (
    <Card 
      borderRadius={'20px'}
      width={'50%'}
      margin={'auto'}
      marginTop={'30px'}
    >
      <CardHeader>
        <Heading size='md' textAlign={'center'}>{listing.title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='2'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Borrower
            </Heading>
            <Text pt='2' fontSize='sm'>
              {listing.borrower}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Amount
            </Heading>
            <Text pt='2' fontSize='sm'>
              {listing.amount}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Term
            </Heading>
            <Text pt='2' fontSize='sm'>
              {listing.term}
            </Text>
          </Box>
          <Button colorScheme="facebook">Fund Loan</Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default LoanListing