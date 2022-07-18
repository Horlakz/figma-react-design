// import fonts
import "@fontsource/dm-sans";

// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

// custom theme
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "DM Sans, sans-serif",
    heading: "DM Sans, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
