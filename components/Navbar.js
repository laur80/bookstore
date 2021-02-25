import { Box,HStack,Button } from "@chakra-ui/react";
import Link from 'next/link';

const Navbar = () => {
   return ( 
      <Box bg="gray.900" w="100%" p={4} color='gray.50' pos="fixed" top="0" left="0" zIndex={2}>
         <HStack spacing={8} justify='space-around'>
            <Link href="/">
            <a><Button colorScheme='red' px='12'>Home</Button></a>
            </Link>
            <Link href="/newBook">
               <a><Button colorScheme='facebook'>Add new book</Button></a>
            </Link>
         </HStack>
      </Box>
    );
}
 
export default Navbar;