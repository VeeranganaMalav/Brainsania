import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Directions = () => {
  return (
    <div>
      {/* ------------------------------------------ FIRST SECTION ---------------------------------------- */}
      <Stack style={{ textAlign: "left", fontFamily: "Montserrat, sans-serif", margin: "0px 0px 20px 60px" }}>
        <Heading fontSize="5xl">Directions</Heading>
        <Text style={{ fontSize: "21px" }}>8 popular areas, as well as programs for schoolchildren and entire companies</Text>
      </Stack>
      <Grid
        width="90%"
        margin="auto"
        marginTop={50}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={10}
      >
        <Link to={'/programming'}>
          <GridItem>
            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/programming.jpeg" alt='programming' style={{ borderRadius: "20px", position: "relative" }} />
            <Text style={{ position: "absolute", top: "1070px", left: "130px", fontWeight: "700", fontSize: "24px", color: "whitesmoke" }}>Programming</Text>
          </GridItem>
        </Link>
        <Link to={'/design'}>
          <GridItem>
            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/design.jpeg" alt='design' style={{ borderRadius: "20px", position: "relative" }} />
            <Text style={{ position: "absolute", top: "1070px", left: "500px", fontWeight: "700", fontSize: "24px", color: "#52524f" }}>Design</Text>
          </GridItem>
        </Link>
        <Link to={'/ittraining'}>
          <GridItem>
            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/marketing.jpeg" alt='marketing' style={{ borderRadius: "20px", position: "relative" }} />
            <Text style={{ position: "absolute", top: "1070px", left: "800px", fontWeight: "700", fontSize: "24px", color: "#52524f" }}>Marketing</Text>
          </GridItem>
        </Link>
        <Link to={'/ittraining'}>
          <GridItem>
            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/management.jpeg" alt='control' style={{ borderRadius: "20px", position: "relative" }} />
            <Text style={{ position: "absolute", top: "1070px", left: "1180px", fontWeight: "700", fontSize: "24px", color: "white" }}>Control</Text>
          </GridItem>
        </Link>
        <Link to={'/ittraining'}>
          <GridItem>
            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/analytics.jpeg" alt='analytics' style={{ borderRadius: "20px", position: "relative" }} />
            <Text style={{ position: "absolute", top: "1390px", left: "150px", fontWeight: "700", fontSize: "24px", color: "white" }}>Analytics</Text>
          </GridItem>
        </Link>
        <Link to={'/programming'}>
          <GridItem>
            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/games.jpeg" alt='game-development' style={{ borderRadius: "20px", position: "relative" }} />
            <Text style={{ position: "absolute", top: "1390px", left: "430px", fontWeight: "700", fontSize: "24px", color: "white" }}>Game Development</Text>
          </GridItem>
        </Link>
        <Link to={'/programming'}>
          <GridItem>
            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/programming.jpeg" alt='hi-tech' style={{ borderRadius: "20px", position: "relative" }} />
            <Text style={{ position: "absolute", top: "1390px", left: "820px", fontWeight: "700", fontSize: "24px", color: "white" }}>Hi-tech</Text>
          </GridItem>
        </Link>
        <Link to={'/ittraining'}>
          <GridItem>
            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/testing.jpeg" alt='testing' style={{ borderRadius: "20px", position: "relative" }} />
            <Text style={{ position: "absolute", top: "1390px", left: "1160px", fontWeight: "700", fontSize: "24px", color: "white" }}>Testing</Text>
          </GridItem>
        </Link>
      </Grid>

      {/* ------------------------------------------ SECOND SECTION ---------------------------------------- */}
      <Stack style={{ textAlign: "left", fontFamily: "Montserrat, sans-serif", margin: "0px 0px 20px 60px", marginTop: "100px" }}>
        <Heading fontSize="5xl">Assemble your training programs in 4 steps</Heading>
        <Text style={{ fontSize: "21px" }}>The constructor includes dozens of parameters that will make learning as convinient as possible for you</Text>
      </Stack>
      <Grid
        width="90%"
        margin="auto"
        marginTop={50}
        templateColumns='repeat(3, 1fr)'
        gap={10}
        fontFamily="Montserrat, sans-serif"
      >
        <GridItem bg="#b160eb" style={{ borderRadius: "35px", padding: "20px 30px" }}>
          <Stack textAlign="left" color="whiteAlpha.800">
            <p>Training program</p>
            <p style={{ fontSize: "40px", fontWeight: "700" }}>Information Technology</p>
            <Box lineHeight={10} fontWeight={600}>
              <p>Analytics</p>
              <p>Testing</p>
              <p>Product Management in IT</p>
              <p>Project Management in IT</p>
              <p>Programming</p>
              <p>Architecture</p>
            </Box>
            <Link to='/ittraining'>
              <Center p="15px 0px">
                <Button width="60%" fontSize="18px" bg="black" padding="25px 0px" _hover={{ color: "black", backgroundColor: "whiteAlpha.800" }} rightIcon={<ChevronRightIcon />}>To the program</Button>
              </Center>
            </Link>
          </Stack>
        </GridItem>

        <GridItem bg="#2ce629" style={{ borderRadius: "35px", padding: "20px 30px" }}>
          <Stack textAlign="left" color="blackAlpha.800">
            <p>Training program</p>
            <p style={{ fontSize: "40px", fontWeight: "700" }}>Marketing</p>
            <Box lineHeight={10} fontWeight={600}>
              <p>Internet marketing</p>
              <p>Product marketing</p>
              <p>Brand management</p>
            </Box>
            <Link to='/ittraining'>
              <Center p="15px 0px">
                <Button width="60%" fontSize="18px" bg="black" color="whiteAlpha.800" _hover={{ color: "black", backgroundColor: "whiteAlpha.800" }} mt={170} padding="25px 0px" rightIcon={<ChevronRightIcon />}>To the program</Button>
              </Center>
            </Link>
          </Stack>
        </GridItem>

        <GridItem bg="#ede215" style={{ borderRadius: "35px", padding: "20px 30px" }}>
          <Stack textAlign="left" color="blackAlpha.800">
            <p>Training program</p>
            <p style={{ fontSize: "40px", fontWeight: "700" }}>Design</p>
            <Box lineHeight={10} fontWeight={600}>
              <p>Environment design</p>
              <p>Graphic design</p>
              <p>Object design</p>
              <p>Digital design</p>
            </Box>
            <Link to='/design'>
              <Center p="15px 0px">
                <Button width="60%" fontSize="18px" bg="black" color="whiteAlpha.800" _hover={{ color: "black", backgroundColor: "whiteAlpha.800" }} mt={135} padding="25px 0px" rightIcon={<ChevronRightIcon />}>To the program</Button>
              </Center>
            </Link>
          </Stack>
        </GridItem>

      </Grid>
    </div>
  )
}

export default Directions