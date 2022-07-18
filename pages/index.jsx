import Head from "next/head";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box as="main" width="full">
        {/* page heading */}
        <Heading w="full" h="8.75rem" bgColor="#292929" px="4.8125rem" py="10">
          <Text
            border="1px solid white"
            w="12.0625rem"
            h="full"
            py="0.875rem"
            px="1.125rem"
            fontSize="2xl"
            color="white"
          >
            MyTestApp
          </Text>
        </Heading>

        {/* image section */}
        <Box w="full" h="34.75rem"></Box>
      </Box>
    </>
  );
}
