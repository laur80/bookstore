import { ChakraProvider } from "@chakra-ui/react";
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
     <ChakraProvider resetCSS >
     <Navbar/>
       <Component {...pageProps} />
     </ChakraProvider>
  )
}

export default MyApp
