import Head from "next/head";
import { Box, Heading, HStack, Image, Input, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { client } from "../client";

export default function Home() {
  const { data: movies, isSuccess: moviesSuccess } = useQuery(
    "movies",
    async () => await client.get("&type=movie")
  );

  const { data: series, isSuccess: seriesSuccess } = useQuery(
    "series",
    async () => await client.get("&type=series")
  );

  console.log(movies);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box as="main" width="100vw">
        {/* page heading */}
        <Heading
          w="full"
          h="8.75rem"
          bgColor="#292929"
          px="4.8125rem"
          py="10"
          display="flex"
          alignItems={["center", "center", "unset"]}
          justifyContent={["center", "center", "unset"]}
        >
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
        <Box as="section" w="full" h="34.75rem" pos="relative">
          <Image
            src="https://i.ibb.co/qmYyQFf/bg-image.png"
            alt="background image"
            w="full"
            h="full"
            // objectFit="cover"
            pos="absolute"
            inset="0"
            zIndex="-1"
          />

          <Box
            display="flex"
            alignItems={["center", "center", "unset"]}
            justifyContent={["center", "center", "unset"]}
            textAlign={["center", "center", "unset"]}
          >
            <Text
              w="30.625rem"
              lineHeight="93.74px"
              letterSpacing="-0.05em"
              fontWeight="700"
              fontSize="4.5rem"
              color="white"
              pl={[0, 0, "4.185rem"]}
              pt="6.8125rem"
            >
              Watch something incredible.
            </Text>
          </Box>
        </Box>

        {/* movies section */}
        <Box as="section" w="100vw" bgColor="white">
          <Box ml="77px" mr="57px">
            <Text fontSize="24px" lineHeight="31px" mt="63px">
              Search
            </Text>
            <Input
              type="text"
              w="full"
              mt="4px"
              h="54px"
              border="1px solid black"
              outline="1px solid black"
              rounded="none"
              _focus={{
                border: "1px solid black",
                boxShadow: "none",
              }}
            />
          </Box>

          {/* categories section */}
          <Box ml="77px">
            <Text fontSize="24px" lineHeight="31.25px" mt="58px" mb="4px">
              Movies
            </Text>
            <HStack gap="10px">
              {movies?.data?.map((movie) => (
                <Box
                  w="300px"
                  h="300px"
                  display="flex"
                  placeItems="center"
                  justifyContent="center"
                  rounded="xl"
                  bgColor="black"
                  fontSize="24px"
                  lineHeight="31.25px"
                  color="white"
                >
                  Hello world
                </Box>
              ))}
            </HStack>
          </Box>

          {/* categories section */}
          <Box ml="77px" mt="58px">
            <Text fontSize="24px" lineHeight="31.25px" mt="58px" mb="4px">
              Movies
            </Text>
            <HStack gap="10px">
              {series?.data?.map((movie) => (
                <Box
                  w="300px"
                  h="300px"
                  display="flex"
                  placeItems="center"
                  justifyContent="center"
                  rounded="xl"
                  bgColor="black"
                  fontSize="24px"
                  lineHeight="31.25px"
                  color="white"
                >
                  Hello world
                </Box>
              ))}
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
