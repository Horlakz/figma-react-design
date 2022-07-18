// import fonts
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/400.css";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";

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
    <QueryClientProvider client={new QueryClient()}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
