import { Text,Button,Center, Stack,Wrap,  
   AlertDialog,
   AlertDialogBody,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogContent,
   AlertDialogOverlay,} from "@chakra-ui/react";
import axios from 'axios';
import { useState,useRef } from 'react';
import { useRouter} from 'next/router';

const URL = ('http://localhost:3000/api/books')
console.log(URL);

export async function getServerSideProps(context) {

   const id = context.params.id.toString();
   const url =`${URL}/${id}`;
   const data = await axios(url)
   // console.log(data.data.data);
   return {
      props:{data:data.data.data}
   }
}

const deleteBook = ({data}) => {

   const id = data._id;
   const [isOpen, setIsOpen] = useState(false)
   const cancelRef = useRef();
   const router = useRouter();
   
   const onClose = () => setIsOpen(false)

   const deleteRedirect = async() => {
      const url = `${URL}/${id}`;
      const del = await axios.delete(url);
      // console.log(del)
      router.push('/');
   }


   return (
      <Center bg='#385898' my='36' w='60%' mx='auto' p='5rem' borderRadius='md'>
            <Stack>
               <Stack mb='10'>
                  <Center>
                     <Text fontSize="3xl" color='whiteAlpha.900'>{data.title}</Text>
                  </Center>
                  
                  <Center>
                     <Text fontSize="xl" color='whiteAlpha.900'>by: {data.author}</Text>
                  </Center>
               </Stack>
               
               <Button onClick={() => setIsOpen(true)} colorScheme="red">Delete Book</Button>
               <AlertDialog
                     isOpen={isOpen}
                     leastDestructiveRef={cancelRef}
                     onClose={onClose}
                     >
                     <AlertDialogOverlay>
                        <AlertDialogContent>
                           <AlertDialogHeader fontSize="md" fontWeight="bold">
                           Delete Book
                           </AlertDialogHeader>

                           <AlertDialogBody>
                           Are you sure? You can't undo this action afterwards.
                           </AlertDialogBody>

                           <AlertDialogFooter>
                                 <Button ref={cancelRef} onClick={onClose}>
                                    Cancel
                                 </Button>
                                 <Button colorScheme="red" onClick={deleteRedirect} ml={3}>
                                    Delete
                                 </Button>
                           </AlertDialogFooter>
                        </AlertDialogContent>
                     </AlertDialogOverlay>
               </AlertDialog>
            </Stack>
      </Center>
     );
}

 
export default deleteBook;