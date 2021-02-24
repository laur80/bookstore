import { useState, useEffect } from 'react';
import { useRouter} from 'next/router';
import { useFormik } from 'formik';
import axios from 'axios';
import { Input,FormControl, FormLabel,Textarea,Button,Center, Spinner, Stack,Form,Wrap} from "@chakra-ui/react";


export default function newBook () {
   const router = useRouter();

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
        title: '',
        author: '',
        description: '',
      },
      validate,
      onSubmit: async(values) =>{
         const url ='http://localhost:3000/api/books';
         await axios.post(url,values)
         router.push("/");
       }
    });
   
    return (
       <Wrap bg='aliceblue' my='36' w='60%' mx='auto' p='5rem'>
            <Stack mx='auto' w='80%'>
                  <form onSubmit={formik.handleSubmit}>
                  <FormLabel htmlFor="title">Book title</FormLabel>
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
            
                  <FormLabel htmlFor="author">Author Name</FormLabel>
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
            
                  <FormLabel htmlFor="description">Book Description</FormLabel>
                  <Textarea
                     py='2'
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
            
                  <Button type="submit">Submit</Button>
               </form>
            </Stack>
      </Wrap>
      )
}