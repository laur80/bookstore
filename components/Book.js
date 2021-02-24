import { Box,VStack,Center,Divider,Text, Button, Image as ImageChackra} from "@chakra-ui/react";
import Link from 'next/link';
import Image from 'next/image'

const Book = ({title,description,author}) => {
   
   return ( 
      <div id='card' >
         <VStack >
            <Box >
            {/* <ImageChackra src='/bk.png' alt="book" objectFit="cover"/> */}
            <Image src='/bk.png' alt="book" layout="intrinsic" width={310} height={150}/>
            </Box>
            <Text as='h2'
            color='gray.900'
            fontSize='xl'
            fontWeight='semibold'
            textTransform='uppercase'
            >{title}</Text>
            <Divider orientation="horizontal" background='gray.500' variant='dashed' />
            <Text as='h5'
            color='gray.700'
            fontSize='md'
            fontWeight='medium'
            // textTransform='uppercase'
            >{author}</Text>
            <Divider orientation="horizontal" p={0.4} background='gray.500'/>
            <Center>
               <Text
               color='gray.700'
               fontSize='md'
               mx='8'
               >{description}</Text>
            </Center>
         </VStack>
         
         <div  className='bt'>
            <Button colorScheme="facebook"  >View</Button>
            <Button colorScheme="facebook">Edit</Button>
         </div>

      </div>
    );
}
export default Book;
