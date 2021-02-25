import Head from 'next/head'
import { Center, Spinner, Stack, Skeleton, Wrap} from "@chakra-ui/react";
import Book from '../components/Book';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useQuery} from 'react-query';
// import axios from 'axios';



// export async function getStaticProps(context){
//    const url ='http://localhost:3000/api/books';
//    const {data} = await axios(url)

//    return {
//       props:{books : data.data} 
//    }
// }

// const HOSTNAME=process.env.HOSTNAME || 'localhost';
// const PORT = process.env.PORT || 3000;
// const url ='http://{HOSTNAME}:{PORT}/api/books';

async function fetchBooks(){
   const url = '/api/books'
   const res = await fetch(url)
   const dt= await res.json();
   return dt
}


export default function Home({books}) {
   const{data,isPreviousData, status} = useQuery(['books'], fetchBooks, {
      keepPreviousData: true
    } );
//   if(status=== 'success') console.log(data.data);\


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
      <div id='container'>
         {data.data.map((b)=><Book key={b._id} title={b.title} description={b.description} author={b.author} id={b._id} b={b}/>)}
      </div>}
    
      <ReactQueryDevtools initialIsOpen={false} />
    </>  
  )
}
