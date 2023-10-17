import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const LoanListing = ({ listing }) => {
  return (
    <Box
      className="loan-item"
      padding={5}
      width={'100%'}
      height={'170px'}
      borderRadius={'30px'}
      borderWidth={'2px'}
      backgroundColor={'white'}
      opacity={'80%'}
    >
      <Text>{listing.title}</Text>
      <Text>{listing.description}</Text>
      <Button>View Details</Button>
    </Box>
  );
};

export default LoanListing