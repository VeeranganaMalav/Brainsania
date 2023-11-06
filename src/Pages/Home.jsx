import React, { useContext } from 'react';
// import Directions from '../Components/Directions';
// import Footer from '../Components/Footer';
// import IntroSection from '../Components/IntroSection';
// import MiddleSection from '../Components/MiddleSection';
// import Navbar from '../Components/Navbar';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Spacer, Stack, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthContextProvider';

import { Box, Grid, GridItem } from '@chakra-ui/react';
import illustration from '../images/illustartion1.png';
import { ButtonGroup, VStack } from '@chakra-ui/react';


import { ChevronRightIcon } from '@chakra-ui/icons';
import { Center, Heading } from '@chakra-ui/react';
import student1 from '../images/student1.jpg';
import student2 from '../images/student2.jpg';
import student3 from '../images/student3.jpg';

const Home = () => {

    // return (
    //     <div style={{ border: "2px solid black" }}>
    //         <Navbar />
    //         <IntroSection />
    //         <Directions />
    //         <MiddleSection />
    //         <Footer />
    //     </div>
    // )










    // --------------------------------------- RESPONSIVE IMPLEMENTATION ----------------------------------------------
    const { isAuth, user, logout } = useContext(AuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isLarge] = useMediaQuery('(min-width: 62em)');

    return (
        <div>
            {/* --------------------------------------- NAVBAR ---------------------------------------------- */}
            <div style={{ fontFamily: "Montserrat, sans-serif" }}>
                <Flex alignItems='center' gap='7' px={5}>
                    <HStack>
                        <Button colorScheme='gray' onClick={onOpen}>
                            <HamburgerIcon />
                        </Button>
                        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader fontSize="3xl" borderBottomWidth='1px' fontFamily="Montserrat, sans-serif">Programs</DrawerHeader>
                                <DrawerBody style={{ fontFamily: "Montserrat, sans-serif" }}>
                                    <Stack spacing="24px">
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
                                            <Link to='/ittraining'>
                                                Information Technology
                                            </Link>
                                        </Text>
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
                                            <Link to='/programming'>
                                                Programming
                                            </Link>
                                        </Text>
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
                                            <Link to='/ittraining'>
                                                Analytics
                                            </Link>
                                        </Text>
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
                                            <Link to='/ittraining'>
                                                Testing
                                            </Link>
                                        </Text>
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
                                            <Link to='/ittraining'>
                                                Product and Projects
                                            </Link>
                                        </Text>
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
                                            <Link to='/ittraining'>
                                                IT Architecture
                                            </Link>
                                        </Text>
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>Blockchain</Text>
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>Marketing</Text>
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
                                            <Link to='/design'>
                                                Design
                                            </Link>
                                        </Text>
                                        <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>Games</Text>
                                    </Stack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                        <Link to='/'>
                            <img src={"https://drive.google.com/uc?id=124-9YxZqrQn7FFUwRfvud_GCfhjXGByR"} alt='geek-brains-logo' width={200} />
                        </Link>
                    </HStack>
                    <Text fontSize="xl" fontWeight={700} _hover={{ color: "#9d9b9e" }} onClick={onOpen}>Programs</Text>
                    {
                        isAuth ? (
                            <Link to={`/users/${user.id}`}>
                                <Text fontSize="xl" fontWeight={700} _hover={{ color: "#9d9b9e" }}>My Learning</Text>
                            </Link>
                        ) : (
                            null
                        )
                    }
                    {isLarge && <Text fontSize="xl" fontWeight={700} _hover={{ color: "#9d9b9e" }}>Events</Text>}
                    {isLarge && <Text fontSize="xl" fontWeight={700} _hover={{ color: "#9d9b9e" }}>Job Search</Text>}
                    <Spacer />
                    {
                        isAuth ? (
                            <HStack>
                                <Text>Hi, {user.name}</Text>
                                <Spacer />
                                <Button colorScheme='gray' _hover={{ backgroundColor: "black", color: "white" }} onClick={logout}>
                                    Logout
                                </Button>
                            </HStack>
                        ) : (
                            <HStack>
                                <Link to="/login" style={{ textDecoration: "none" }}>
                                    <Button colorScheme='gray' _hover={{ backgroundColor: "black", color: "white" }}>
                                        Login
                                    </Button>
                                </Link>
                                <Spacer />
                                <Link to="/register" style={{ textDecoration: "none" }}>
                                    <Button colorScheme='gray' _hover={{ backgroundColor: "black", color: "white" }}>
                                        Registration
                                    </Button>
                                </Link>
                            </HStack>
                        )
                    }
                </Flex>
            </div>

            {/* -------------------------------------- INTRO SECTION ------------------------------------- */}
            <div style={{ fontFamily: "Montserrat, sans-serif" }}>
                <Flex margin="100px 0px 100px 50px">
                    <Stack textAlign="left">
                        <p style={{ fontWeight: "700", fontSize: "20px" }}>Brainsania - education in IT</p>
                        <Box style={{ fontWeight: "1000", fontSize: "45px" }}>
                            <Text _hover={{ color: "#9d9b9e" }} fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}>Change your profession</Text>
                            <Text _hover={{ color: "#9d9b9e" }} fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}>Learn new things</Text>
                            <Text _hover={{ color: "#9d9b9e" }} fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}>Find yourself</Text>
                        </Box>
                        <p style={{ fontWeight: "500" }}>We train professions from scratch and provide knowledge in popular specialties and areas in the field of Information Technology.</p>
                        <Grid
                            width="100%"
                            pt={50}
                            templateColumns='repeat(3, 1fr)'
                            gap={{ base: 8, md: 8, lg: 10 }}
                            fontWeight={500}
                        >
                            <GridItem>
                                Long-term training programs, short intensive programs and an extensive knowledge base
                            </GridItem>
                            <GridItem>
                                Lectures, seminars, webinars, events, articles, videos and other formats
                            </GridItem>
                            <GridItem>
                                The largest community of IT professionals, experts, alumni and newcomers
                            </GridItem>
                        </Grid>
                    </Stack>
                    <Spacer />
                    <Image src={illustration} alt='illustration-design'
                    width={{ base: "400px", md: "400px", lg: "500px" }}
                    height={{ base: "400px", md: "400px", lg: "500px" }}
                    />
                </Flex>
            </div>


            {/* ----------------------------------------- DIRECTIONS ------------------------------------------ */}
            <div>
                {/* ------------------------------------------ FIRST SECTION ---------------------------------------- */}
                <Stack style={{
                    textAlign: "left",
                    fontFamily: "Montserrat, sans-serif",
                    margin: "0px 0px 20px 60px"
                }}>
                    <Heading fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}>Directions</Heading>
                    <Text fontSize={{ base: "18px", md: "18px", lg: "21px" }}>8 popular areas, as well as programs for schoolchildren and entire companies</Text>
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
                            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/programming.jpeg" alt='programming' style={{ borderRadius: "20px" }} />
                            <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }} pt={3} fontWeight={600}>Programming</Text>
                        </GridItem>
                    </Link>
                    <Link to={'/design'}>
                        <GridItem>
                            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/design.jpeg" alt='design' style={{ borderRadius: "20px" }} />
                            <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }} pt={3} fontWeight={600}>Design</Text>
                        </GridItem>
                    </Link>
                    <Link to={'/ittraining'}>
                        <GridItem>
                            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/marketing.jpeg" alt='marketing' style={{ borderRadius: "20px" }} />
                            <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }} pt={3} fontWeight={600}>Marketing</Text>
                        </GridItem>
                    </Link>
                    <Link to={'/ittraining'}
                        style={{ position: "relative" }}
                    >
                        <GridItem>
                            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/management.jpeg" alt='control' style={{ borderRadius: "20px" }} />
                            <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }} pt={3} fontWeight={600}>Control</Text>
                        </GridItem>
                    </Link>
                    <Link to={'/ittraining'}>
                        <GridItem>
                            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/analytics.jpeg" alt='analytics' style={{ borderRadius: "20px" }} />
                            <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }} pt={3} fontWeight={600}>Analytics</Text>
                        </GridItem>
                    </Link>
                    <Link to={'/programming'}>
                        <GridItem>
                            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/games.jpeg" alt='game-development' style={{ borderRadius: "20px" }} />
                            <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }} pt={3} fontWeight={600}>Game Development</Text>
                        </GridItem>
                    </Link>
                    <Link to={'/programming'}>
                        <GridItem>
                            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/programming.jpeg" alt='hi-tech' style={{ borderRadius: "20px" }} />
                            <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }} pt={3} fontWeight={600}>Hi-tech</Text>
                        </GridItem>
                    </Link>
                    <Link to={'/ittraining'}>
                        <GridItem>
                            <Image src="https://hb.bizmrg.com/frontend-scripts/assets/home/directions/testing.jpeg" alt='testing' style={{ borderRadius: "20px" }} />
                            <Text fontSize={{ base: "20px", md: "20px", lg: "22px" }} pt={3} fontWeight={600}>Testing</Text>
                        </GridItem>
                    </Link>
                </Grid>

                {/* ------------------------------------------ SECOND SECTION ---------------------------------------- */}
                <Stack style={{ textAlign: "left", fontFamily: "Montserrat, sans-serif", margin: "0px 0px 20px 60px", marginTop: "100px" }}>
                    <Heading fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}>Assemble your training programs in 4 steps</Heading>
                    <Text fontSize={{ base: "18px", md: "18px", lg: "21px" }}>The constructor includes dozens of parameters that will make learning as convinient as possible for you</Text>
                </Stack>
                <Grid
                    w={"90%"}
                    margin="auto"
                    marginTop={50}
                    templateColumns='repeat(3, 1fr)'
                    gap={10}
                    fontFamily="Montserrat, sans-serif"
                >
                    <GridItem bg="#b160eb" borderRadius={"35px"} padding={"20px 30px"}>
                        <Stack textAlign="left" color="whiteAlpha.800">
                            <p>Training program</p>
                            <Text fontSize={{ base: "28px", md: "30px", lg: "35px" }} fontWeight={700}>Information Technology</Text>
                            <Box fontWeight={500} pt={"25px"}>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Analytics</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Testing</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Product Management in IT</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Project Management in IT</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Programming</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Architecture</Text>
                            </Box>
                            <Link to='/ittraining'>
                                <Center p={"15px 0px"} marginTop={"30px"}>
                                    <Button
                                        w={{ base: "90%", md: "90%", lg: "60%" }}
                                        fontSize={{ base: "14px", md: "18px", lg: "20px" }}
                                        bg="black"
                                        padding={{ base: "25px 20px", md: "25px 20px", lg: "25px 25px" }}
                                        _hover={{ color: "black", backgroundColor: "whiteAlpha.800" }}
                                        rightIcon={<ChevronRightIcon />}
                                    >To the program</Button>
                                </Center>
                            </Link>
                        </Stack>
                    </GridItem>

                    <GridItem bg="#2ce629" borderRadius={"35px"} padding={"20px 30px"}>
                        <Stack textAlign="left" color="blackAlpha.800">
                            <p>Training program</p>
                            <Text fontSize={{ base: "28px", md: "30px", lg: "35px" }} fontWeight={700}>Marketing</Text>
                            <Box fontWeight={500} pt={"25px"}>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Internet marketing</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Product marketing</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Brand management</Text>
                            </Box>
                            <Link to='/ittraining'>
                                <Center p={"15px 0px"} marginTop={{ base: "280px", md: "280px", lg: "240px" }}>
                                    <Button
                                        w={{ base: "90%", md: "90%", lg: "60%" }}
                                        fontSize={{ base: "14px", md: "18px", lg: "20px" }}
                                        bg="black" color="whiteAlpha.800"
                                        _hover={{ color: "black", backgroundColor: "whiteAlpha.800" }}
                                        padding={{ base: "25px 20px", md: "25px 20px", lg: "25px 25px" }}
                                        rightIcon={<ChevronRightIcon />}
                                    >To the program</Button>
                                </Center>
                            </Link>
                        </Stack>
                    </GridItem>

                    <GridItem bg="#ede215" borderRadius={"35px"} padding={"20px 30px"}>
                        <Stack textAlign="left" color="blackAlpha.800">
                            <p>Training program</p>
                            <Text fontSize={{ base: "28px", md: "30px", lg: "35px" }} fontWeight={700}>Design</Text>
                            <Box fontWeight={500} pt={"25px"}>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Environment design</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Graphic design</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Object design</Text>
                                <Text fontSize={{ base: "18px", md: "20px", lg: "21px" }} p={{ lg: "10px 0px", md: "10px 0px", base: "50px 0px" }}>Digital design</Text>
                            </Box>
                            <Link to='/design'>
                                <Center p={"15px 0px"} marginTop={{ base: "230px", md: "230px", lg: "190px" }}>
                                    <Button
                                        w={{ base: "90%", md: "90%", lg: "60%" }}
                                        fontSize={{ base: "14px", md: "18px", lg: "20px" }}
                                        bg="black"
                                        color="whiteAlpha.800"
                                        _hover={{ color: "black", backgroundColor: "whiteAlpha.800" }}
                                        padding={{ base: "25px 20px", md: "25px 20px", lg: "25px 25px" }}
                                        rightIcon={<ChevronRightIcon />}
                                    >To the program</Button>
                                </Center>
                            </Link>
                        </Stack>
                    </GridItem>
                </Grid>
            </div>








            {/* ----------------------------------------- MIDDLE SECTION ------------------------------------------ */}
            <div style={{ marginTop: "100px" }}>
                <Stack style={{ width: "90%", margin: "auto" }} spacing="40px">
                    <Box style={{ textAlign: "left" }}>
                        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>Success stories of our students</Heading>
                        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} color="#9d9b9e">that we are proud of</Heading>
                    </Box>
                    <Grid
                        // h='200px'
                        marginTop={"50px"}
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(4, 1fr)'
                        gap={20}
                    >
                        <GridItem rowSpan={2} colSpan={2}>
                            <Center>
                                <Image src={student3} alt='student-3' style={{ width: "90%", height: "300px", }} />
                            </Center>
                            <p style={{ fontWeight: "700" }}>“I found my first job already in the second month of studying at GB”</p>
                            <p>Katerina Lychak, 38 years old, tells. Faculty of Internet Marketing.</p>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <HStack>
                                <Box style={{ textAlign: "left" }}>
                                    <p style={{ fontWeight: "700" }}>“I got something on my phone that I made myself”</p>
                                    <p>Georgy Valiev - how to learn to become an Android developer from scratch in just a year and get an offer from Umbrella IT before completing the course</p>
                                </Box>
                                <Image src={student1} alt="student-1" width={{ base:"120px", md: "120px", lg: "150px" }} />
                            </HStack>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <HStack>
                                <Box style={{ textAlign: "left" }}>
                                    <p style={{ fontWeight: "700" }}>“I got something on my phone that I made myself”</p>
                                    <p>Vsevolod Nekrasov, a graduate of the Faculty of Product Management, talks about hackathons, mentoring and the experience of creating a working IT product as part of his studies</p>
                                </Box>
                                <Image src={student2} alt="student-2" width={{ base:"100px", md: "120px", lg: "150px" }}/>
                            </HStack>
                        </GridItem>
                    </Grid>
                </Stack>
            </div>







            {/* ----------------------------------------- FOOTER ------------------------------------------ */}
            <div style={{ fontFamily: "Montserrat, sans-serif" }}>
                <Box 
                    padding={{ base: "10px 40px 50px 30px", md: "10px 40px 50px 30px", lg: "10px 30px 50px 30px" }}
                    marginTop={"110px"}
                >
                    <HStack spacing="28px" fontWeight={600}>
                        <Image src={"https://drive.google.com/uc?id=124-9YxZqrQn7FFUwRfvud_GCfhjXGByR"} alt='geek-brains-logo' width={200} />
                        <p>+7 499 922-47-10</p>
                        <p>8 800 700-68-41</p>
                        <p>support@brainsania.in</p>
                        <Spacer />
                        <ButtonGroup>
                            <Button>
                                <Image src='https://frontend-scripts.hb.bizmrg.com/unique-hf/svg/youtube-icon.svg' alt='youtube-icon' />
                            </Button>
                            <Button>
                                <Image src='https://frontend-scripts.hb.bizmrg.com/unique-hf/svg/tg-icon.svg' alt='telegram-icon' />
                            </Button>
                        </ButtonGroup>
                    </HStack>
                    <hr></hr>
                    <HStack spacing={{  base: "70px", md: "90px", lg: "120px" }}>
                        <Stack>
                            <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Studying programs</Text>
                            <HStack spacing="100px">
                                <VStack spacing="20px">
                                    <p>Information Technology</p>
                                    <p>Programming</p>
                                    <p>Analytics</p>
                                    <p>Testing</p>
                                    <p>Product and Projects</p>
                                    <p>IT Architecture</p>
                                    <p>Machine Learning</p>
                                </VStack>
                                <VStack spacing="20px">
                                    <p>Information Security</p>
                                    <p>Blockchain</p>
                                    <p>Marketing</p>
                                    <p>Design</p>
                                    <p>Games</p>
                                    <p>School children</p>
                                    <p>Digital Professions</p>
                                </VStack>
                            </HStack>
                        </Stack>
                        <Stack spacing="24px">
                            <Stack textAlign="top">
                                <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Testing</Text>
                                <VStack>
                                    <p>All tests</p>
                                    <p>Career guidance</p>
                                    <p>Profession Selection</p>
                                </VStack>
                            </Stack>
                            <Stack>
                                <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Job Search</Text>
                                <VStack>
                                    <p>Companies</p>
                                    <p>Jobs</p>
                                    <p>Work at Brainsania</p>
                                </VStack>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Box>
                                <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Magazine</Text>
                                <VStack>
                                    <p>Materials</p>
                                    <p>Forum</p>
                                    <p>Success stories</p>
                                    <p>For children and teenagers</p>
                                    <p>Blog</p>
                                    <p>Life at Brainsania</p>
                                </VStack>
                            </Box>
                        </Stack>
                        <Stack>
                            <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>About Company</Text>
                            <VStack>
                                <p>License</p>
                                <p>Jobs</p>
                                <p>Reviews</p>
                                <p>Referrals</p>
                                <p>Contacts</p>
                                <p>Help</p>
                            </VStack>
                        </Stack>
                    </HStack>

                    <Stack style={{ marginTop: "70px", color: "#80807c", textAlign: "left" }}>
                        <p>Privacy Policy</p>
                        <p>Brainsania LLC, 125167, Moscow, Leningradsky, 39, building 79, floor 23</p>
                        <p>Copyright © 2023 Brainsania.</p>
                    </Stack>
                </Box>
            </div>
        </div>
    )
}

export default Home