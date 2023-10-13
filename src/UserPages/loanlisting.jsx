import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const LoanListing = ({ listing }) => {
  return (
    <Box 
      padding={5}
      width={'100%'}
      backgroundColor={'lightblue'}
      height={'170px'}
      borderRadius={'30px'}
    >
      <Text>{listing.title}</Text>
      <Text>{listing.description}</Text>
      <Button>View Details</Button>
    </Box>
  );
};

export default LoanListing