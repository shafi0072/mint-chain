import { Image, Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import PriceCounter from "../PriceCounter/PriceCounter";

const H1Banner = () => {
  return (
    <>
      <Box
        bgImage="url('images/home1/h1-banner.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize={"cover"}
        pt={"216px"}
        pb={"64px"}
      >
        <Container maxW={"1171px"} mx={"auto"}>
            <Box
              position={"relative"}
              maxW={"782px"}
              mx={"auto"}
            >
              <Image
                className="animetionUp1"
                src="images/home1/banner-icon1.svg"
                alt="icon"
                position={"absolute"}
                left={"0px"}
                top={"0px"}
                display={{md: "block", base: "none"}}
              />
              <Image
                className="animetionDown1"
                src="images/home1/banner-icon3.svg"
                alt="icon"
                position={"absolute"}
                right={"-10px"}
                top={"-10px"}
                display={{md: "block", base: "none"}}
              />
              <Image
              className="animetionDown2"
                src="images/home1/banner-icon2.svg"
                alt="icon"
                position={"absolute"}
                left={"15%"}
                bottom={"-50%"}
                display={{md: "block", base: "none"}}
              />
              <Image
                className="animetionUp2"
                src="images/home1/banner-icon4.svg"
                alt="icon"
                position={"absolute"}
                right={"15%"}
                bottom={"5%"}
                display={{md: "block", base: "none"}}
              />
              <Heading
                as="h2"
                textAlign={"center"}
                maxW={"500px"}
                width={"100%"}
                mx={"auto"}
                fontSize={{
                  xl: "60px",
                  md: "50px",
                  sm: "45px",
                  base: "32px",
                }}
                lineHeight={{
                  xl: "80px",
                  md: "60px",
                  sm: "55px",
                  base: "42px",
                }}
                fontWeight={"400"}
                color={"#FFFFFF"}
                marginBottom={{ lg: "22px", base: "18px" }}
                fontFamily={"primary"}
                textTransform={"uppercase"}
              >
                Gamblers <br />
                NFT collections
              </Heading>
              <Heading
                as="h3"
                textAlign={"center"}
                maxW={"500px"}
                width={"100%"}
                mx={"auto"}
                fontSize={{
                  xl: "40px",
                  lg: "36px",
                  md: "30px",
                  sm: "24px",
                  base: "20px",
                }}
                fontWeight={"400"}
                lineHeight={{
                  xl: "60px",
                  lg: "45px",
                  md: "40px",
                  base: "30px",
                }}
                color={"#FFFFFF"}
                marginBottom={{ lg: "48px", sm: "30px", base: "20px" }}
                fontFamily={"primary"}
                textTransform={"uppercase"}
              >
                369 / 1000 Minted
              </Heading>
            </Box>
            <Link
              className="btn-icon-hov"
              href={"http://localhost:3000/mint"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mx={"auto"}
              textTransform={"uppercase"}
              height={"60px"}
              width={"200px"}
              bg={"rgba(0, 0, 0, 0.2)"}
              borderRadius={"5px"}
              boxShadow={"0px 4px 10px #E51041"}
              backdropFilter={"blur(5px)"}
              fontSize={"16px"}
              lineHeight={"22px"}
              fontWeight={"400"}
              color={"#FFFFFF"}
              _hover={{ bg: "#E51041", boxShadow: "none" }}
              position={"relative"}
              transition={"0.5s"}
            >
              Mint Now
            </Link>
            <Box
              maxW={"496px"}
              width={"100%"}
              mx={"auto"}
              pt={"37px"}
              pb={"150px"}
            >
              <Heading
                as="h4"
                textTransform={"uppercase"}
                fontSize={{ lg: "18px", sm: "16px", base: "13px" }}
                fontWeight={"400"}
                lineHeight={{ lg: "36px", sm: "30px", base: "24px" }}
                color={"#FFFFFF"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
                gap={"8px"}
                fontFamily={"primary"}
              >
                Mint Is Live Until
                <Text as="span" color={"#E51041"}>
                  25D
                </Text>
                <Text opacity={"50%"}>:</Text>
                <Text as="span" color={"#E51041"}>
                  21H
                </Text>
                <Text opacity={"50%"}>:</Text>
                <Text as="span" color={"#E51041"}>
                  56M
                </Text>
                <Text opacity={"50%"}>:</Text>
                <Text as="span" color={"#E51041"}>
                  05S
                </Text>
              </Heading>
              <Heading
                as="h4"
                textTransform={"uppercase"}
                fontSize={{ lg: "18px", sm: "16px", base: "13px" }}
                fontWeight={"400"}
                lineHeight={{ lg: "36px", sm: "30px", base: "24px" }}
                color={"#FFFFFF"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"8px"}
                fontFamily={"primary"}
                textAlign={"center"}
              >
                Price for whitelist: 0.15 ETH . Regular Price 0.22 ETH
              </Heading>
              <Heading
                as="h4"
                textTransform={"uppercase"}
                fontSize={{ lg: "18px", sm: "16px", base: "13px" }}
                fontWeight={"400"}
                lineHeight={{ lg: "36px", sm: "30px", base: "24px" }}
                color={"#FFFFFF"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"8px"}
                fontFamily={"primary"}
                textAlign={"center"}
              >
                Max 5 NFTs per wallet
              </Heading>
            </Box>

          <PriceCounter />
        </Container>
      </Box>
    </>
  );
};

export default H1Banner;
