import { Text,Button,Center, Stack,Wrap, Spinner,  
   AlertDialog,
   AlertDialogBody,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogContent,
   AlertDialogOverlay,} from "@chakra-ui/react";
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery} from 'react-query';


// export async function getServerSideProps(context) {

//    const id = context.params.id.toString();
//    const url =`${URL}/${id}`;
//    const data = await axios(url)
//    // console.log(data.data.data);
//    if (!data) {
//       return {
//         notFound: true,
//       }
//     }
  
//    return {
//       props:{data:data.data.data}
//    }
// }


const deleteBook = () => {

   // const id = data._id;
   // console.log(id);
   const [isOpen, setIsOpen] = useState(false)
   const cancelRef = useRef();
   const router = useRouter();
   const id = router.query.id
   const url =`/api/books/${id}`

   const onClose = () => setIsOpen(false)

   
  async function  fetchBook(){
     let bk = await axios(url)
   //   console.log('in',bk.data);
     return bk.data.data
  }

  const{data,isPreviousData, status} = useQuery(['book'], fetchBook, {
   keepPreviousData: true
 } );

   // if(status=== 'success') console.log(data.title);
 
   const deleteRedirect = async() => {
      const del = await axios.delete(url);
      // console.log(del)
      router.push('/');
   }


   return (
      <>
      {status === 'loading' && (
         <Center mt='40'>
            <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            />
         </Center>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && 
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
      </Center>}
      </>
     );
}

 
export default deleteBook;