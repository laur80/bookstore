import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import axios from 'axios';
import { Input,FormControl, FormLabel,Textarea,Button,Center, Stack,Form,Wrap,Spinner} from "@chakra-ui/react";


export async function getServerSideProps(context) {

   const id = context.params.id.toString();
  

   if (!id) {
      return {
        notFound: true,
      }
    }
  
   return {
      props:{id}
   }
}


export default function newBook ({id}) {
   const router = useRouter();
   const url =`/api/books/${id}`;
   let books= {}
      async function  fetchBook(){
         let res = await fetch(url)
       //   console.log('in',bk.data);
       const bk= await res.json();
       books = {title: bk.data.title,
         author:bk.data.author,
         description:bk.data.description }
        
         return books
      }

  
   const{data,isPreviousData, status} = useQuery(['book'], fetchBook, {
    keepPreviousData: true
  } );
  
  const [state, setState] = useState([])

  if(status === 'success' && state.length ===0){
   setState (data)
  } 
//   console.log(state);

   function handleChange(e){
      
      setState({...state,[e.target.name]:e.target.value })
   }

   const updateRedirect = async() => {
      const url =`/api/books/${id}`;
      const updateBook = await axios.put(url,state);
   }


    function handleSubmit(){
      updateRedirect();
      router.push('/');
    }
    
 
//    const validate = values => {
//       const errors = {}
  
//       if (!values.title) {
//          errors.title = 'Title is required';
//      }
//      if (!values.author) {
//       errors.author = 'Author is required';
//   }
//      if (!values.description) {
//       errors.description = 'Description is required';
//      }
  
//       return errors
//     }
   
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

            {status === 'success' && (  
            <Wrap bg='#385898' my='36' w='60%' mx='auto' p='5rem' borderRadius='lg'>
                  <Stack mx='auto' w='80%'>
                        <form onSubmit={handleSubmit}>
                        <FormLabel htmlFor="title" color='whiteAlpha.900'>Book title</FormLabel>
                        <Input
                           bg='white'
                           id="title"
                           name="title"
                           type="text"
                           onChange={handleChange}
                           // onBlur={handleBlur}
                           value={state.title}
                        />
                        {/* {touched.title && errors.title ? (
                           <div>{errors.title}</div>
                        ) : null}
                  */}
                        <FormLabel htmlFor="author" color='whiteAlpha.900'>Author Name</FormLabel>
                        <Input
                           bg='white'
                           id="author"
                           name="author"
                           type="text"
                           onChange={handleChange}
                           // onBlur={handleBlur}
                           value={state.author}
                        />
                        {/* {touched.author && errors.author ? (
                           <div>{errors.author}</div>
                        ) : null}
                  */}
                        <FormLabel htmlFor="description" color='whiteAlpha.900'>Book Description</FormLabel>
                        <Textarea
                           mb='8'
                           h='40'
                           p='2'
                           bg='white'
                           id="description"
                           name="description"
                           type="description"
                           onChange={handleChange}
                           // onBlur={handleBlur}
                           value={state.description}
                        />
                        {/* {touched.description && errors.description ? (
                           <div>{errors.description}</div>
                        ) : null} */}
                        <Center>
                           <Button colorScheme="whatsapp" type="submit">Edit Book</Button>
                        </Center>   
                     
                     </form>
                  </Stack>
            </Wrap>
            )}
      </>
      )
}