import { Box,HStack } from "@chakra-ui/react";
import Link from 'next/link';

const Navbar = () => {
   return ( 
      <Box bg="gray.900" w="100%" p={4} color='gray.50' pos="fixed" top="0" left="0" zIndex={2}>
         <HStack spacing={8} justify='space-around'>
            <Link href="http://localhost:3000/">
               <a>Bookstore</a>
            </Link>
            <Link href="http://localhost:3000/newBook">
               <a>Add new book</a>
            </Link>
         </HStack>
      </Box>
    );
}
 
export default Navbar;