import Head from 'next/head'
import { Center, Container, Box ,Flex } from "@chakra-ui/react";
import axios from 'axios';
import Book from '../components/Book';
// import styles from '../styles/Home.module.css'



export async function getStaticProps(context){
   const url ='http://localhost:3000/api/books';
   const {data} = await axios(url)

   return {
      props:{books : data.data} 
   }
}


export default function Home({books}) {
// console.log(books);

  return (
  
      <div id='container'>
         {books.map((b)=><Book key={b._id} title={b.title} description={b.description}/>)}
      </div>
      
  )
}
