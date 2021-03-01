import { useState, useEffect } from 'react';
import { useQuery} from 'react-query';
import { useRouter} from 'next/router';
import { useFormik } from 'formik';
import axios from 'axios';
import { Input,FormControl, FormLabel,Textarea,Button,Center, Stack,Form,Wrap} from "@chakra-ui/react";


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

   async function  fetchBook(){
      let res = await fetch(url)
    //   console.log('in',bk.data);
    const bk= await res.json();
    const books = {title: bk.data.title,
      author:bk.data.author,
      description:bk.data.description }
      return books
   }
 
   const{data,isPreviousData, status} = useQuery(['book'], fetchBook, {
    keepPreviousData: true
  } );
  let tit=[]
  const [state, setState] = useState(tit)
    if(status=== 'success') {
      tit.push(data.title, data.author,data.description)
    }
    console.log(state);
   const validate = values => {
      const errors = {}
  
      if (!values.title) {
         errors.title = 'Title is required';
     }
     if (!values.author) {
      errors.author = 'Author is required';
  }
     if (!values.description) {
      errors.description = 'Description is required';
     }
  
      return errors
    }


    const formik = useFormik({
      initialValues: {
        title: state[0],
        author: state[1],
        description: state[2],
      },
      validate,
      onSubmit: async(values) =>{
         // const url ='/api/books';
         await axios.put(url,values)
         router.push("/");
       }
    });
   
    return (
       <Wrap bg='#385898' my='36' w='60%' mx='auto' p='5rem' borderRadius='lg'>
            <Stack mx='auto' w='80%'>
                  <form onSubmit={formik.handleSubmit}>
                  <FormLabel htmlFor="title" color='whiteAlpha.900'>Book title</FormLabel>
                  <Input
                     bg='white'
                     id="title"
                     name="title"
                     type="text"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.title}
                  />
                  {formik.touched.title && formik.errors.title ? (
                     <div>{formik.errors.title}</div>
                  ) : null}
            
                  <FormLabel htmlFor="author" color='whiteAlpha.900'>Author Name</FormLabel>
                  <Input
                     bg='white'
                     id="author"
                     name="author"
                     type="text"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.author}
                  />
                  {formik.touched.author && formik.errors.author ? (
                     <div>{formik.errors.author}</div>
                  ) : null}
            
                  <FormLabel htmlFor="description" color='whiteAlpha.900'>Book Description</FormLabel>
                  <Textarea
                     mb='8'
                     h='40'
                     p='2'
                     bg='white'
                     id="description"
                     name="description"
                     type="description"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.description}
                  />
                  {formik.touched.description && formik.errors.description ? (
                     <div>{formik.errors.description}</div>
                  ) : null}
                  <Center>
                     <Button colorScheme="whatsapp" type="submit">Edit Book</Button>
                  </Center>   
               
               </form>
            </Stack>
      </Wrap>
      )
}