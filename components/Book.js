import { Box,VStack,HStack,Spacer,Text, Image,Button} from "@chakra-ui/react";
import Link from 'next/link';
// import Image from 'next/image'

const Book = ({title,description}) => {
   return ( 
      <div id='card' >
         <VStack>
            <Box >
            <Image src='/bk.png' alt="book" objectFit="cover"/>
            </Box>
            <Text as='h2'
            color='gray.900'
            fontSize='xl'
            fontWeight='semibold'
            textTransform='uppercase'
            >{title}</Text>
            <Text
            color='gray.700'
            fontSize='md'
            mx='8'
            >{description}</Text>
         </VStack>
         
         <div  className='bt'>
            <Button colorScheme="facebook"  >View</Button>
            <Button colorScheme="facebook">Edit</Button>
         </div>

      </div>
    );
}
export default Book;
