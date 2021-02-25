import {  Box,VStack,Divider,Text, Button, Center, Spinner, Stack,Skeleton,
   Editable, EditableInput, EditablePreview, Flex,IconButton, Wrap,ButtonGroup } from "@chakra-ui/react";
import {  EditIcon,CheckIcon,CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import Image from 'next/image';
import CustomControlsExample from './Edit'


const Book = ({title,description,author,id,b}) => {
// console.log(b);
   
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
            {/* {CustomControlsExample([author,'author',{'title':title},{'description':description}])} */}
            <Divider orientation="horizontal" p={0.4} background='gray.500'/>
            <Center>
               <Text
               color='gray.700'
               fontSize='md'
               mx='8'
               >{description}</Text>
               {/* {CustomControlsExample([description,'description',{'title':title},{'author':author}])} */}
            </Center>
         </VStack>
         
         <div  className='bt'>
            <Link  href={`/delete/${id}`}><a>
               <Button colorScheme="red" >Delete</Button>
            </a></Link>
            
            <Link  href={`/edit/${id}`}><a>
               <Button colorScheme="facebook" px='7' >Edit</Button>
            </a></Link>
         </div>

      </div>
    );
}
export default Book;
