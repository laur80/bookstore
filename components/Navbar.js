import { Box,HStack } from "@chakra-ui/react";
import Link from 'next/link';

const Navbar = () => {
   return ( 
      <Box bg="gray.900" w="100%" p={4} color='gray.50'>
         <HStack spacing={8} justify='space-around'>
            <Link href="#">
               <a>Bookstore</a>
            </Link>
            <Link href="#">
               <a>Add new book</a>
            </Link>
         </HStack>
      </Box>
    );
}
 
export default Navbar;