import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { theme as chakraTheme } from '@chakra-ui/react'

const fonts = {
   ...chakraTheme.fonts,
   body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
   heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}
//npm install next-google-fonts si import in _document.js si insert deasupra <Head/>
//import { ColorModeScript } from "@chakra-ui/react" in _document .js  si  atasat interior  <body/>
//import { ChakraProvider, ColorModeProvider, useColorMode  } from "@chakra-ui/react"; in _app.js
// import customTheme from '../styles/theme'  in _app.js
//add in -app.js
{/* <ChakraProvider resetCSS theme={customTheme}>
<ColorModeProvider
   options={{
     initialColorMode: "light",
     useSystemColorMode: true,
   }}
 >
  
     <Component {...pageProps} />
   
 </ColorModeProvider>
</ChakraProvider> */}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})
//padding={[2. 4 ,6, 8]} // corespunde [sm, md, lg, xl]

const overrides = {

  fonts,
  breakpoints,
  fontWeights: {
   normal: 300,
   medium: 600,
   bold: 700
},
  fontSizes: {
   xs: "12px",
   sm: "14px",
   md: "16px",
   lg: "18px",
   xl: "20px",
   "2xl": "24px",
   "3xl": "28px",
   "4xl": "36px",
   "5xl": "48px",
   "6xl": "64px",
},
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
}

const customTheme = extendTheme(overrides)
export default customTheme