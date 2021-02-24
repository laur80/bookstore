import { ChakraProvider, ColorModeProvider, useColorMode  } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {QueryClient,QueryClientProvider} from 'react-query';
import customTheme from '../styles/theme'
import '../styles/globals.css'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return(
     <ChakraProvider resetCSS theme={customTheme}>
     
     <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
         <QueryClientProvider client={queryClient}>
         <Navbar/>
            <Component {...pageProps} />
         <Footer/>   
         </QueryClientProvider>
      </ColorModeProvider>
     </ChakraProvider>
  )
}

export default MyApp
