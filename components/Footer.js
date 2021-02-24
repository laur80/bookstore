import { Box,Center } from "@chakra-ui/react";

const Footer = () => {
   return ( 
      <Box bg="gray.900" w="100%" p={4} color='gray.50' pos="fixed" bottom="0" left="0" zIndex={2}>
         <Center>
         Copyright 2021 Laur
         </Center>
      </Box>
    );
}
 
export default Footer;