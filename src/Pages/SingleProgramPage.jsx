import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Flex, Grid, GridItem, Heading, Image, Spacer, Tag, Text } from '@chakra-ui/react'

const SingleProgramPage = () => {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
        <Navbar />
        <Flex direction="column">
            <Box w="100%" bg="gray.100" style={{textAlign: "left", padding: "50px 50px"}}>
                <Box w="60%">
                    <Box my={10}>
                        <Heading fontSize="6xl">Developer</Heading>
                    </Box>
                    <Box my={10}>
                        <p>Become an in-demand developer. You will learn the basics of programming and the basic concepts of computer science, digital technologies, operating systems, software, databases, analytics systems, programming languages and much more. Get familiar with testing and systems analysis. On the program, you will be able to make an informed choice of specialization and technology, to pump in the chosen direction.</p>
                    </Box>
                    <Box my={10}>
                        <p><span style={{fontWeight: "700"}}>Duration : </span> 12 months, 12 hours a week</p>
                        <p><span style={{fontWeight: "700"}}>Specialization : </span>
                            <Tag size="md" variant='solid' colorScheme='gray'>Specialization</Tag>
                        </p>
                    </Box>
                    <Box>
                        <Tag variant='solid' colorScheme='blue' p={3}>
                            <Text fontSize="xl">Price $ 100</Text>
                        </Tag>
                    </Box>
                </Box>
            </Box>

            {/* --------------------WHAT YOU'LL LEARN----------------------- */}
            <Box w="100%" bg="#eff0f5" style={{textAlign: "left", padding: "50px 50px"}}>
                <Heading fontSize="4xl">Program Benefits</Heading>
                <p>The program brings together the experience of leading experts and methodologists, fundamental and applied knowledge, and up-to-date technological tools. All this is presented in an accessible way - we know how to teach and know exactly what the path in the IT profession can be.</p>
                <Grid
                    w="70%"
                    templateColumns='repeat(2, 1fr)'
                    gap={10}
                    my={10}
                >
                    <GridItem style={{
                        backgroundColor: "white",
                        padding: "30px 30px",
                        height: "130px",
                        borderRadius: "25px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }}>
                        <Flex direction="row" gap={10}>
                            <Image src='https://gb.ru/channels/base/images/benefits/user_outgoing_outline_28.svg' alt="pb-1" style={{width: "40px"}}/>   
                            <Box>
                                <p style={{fontWeight: "700"}}>Smooth entry</p>
                                <p>Suitable even for IT beginners</p>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem style={{
                        backgroundColor: "white",
                        padding: "30px 30px",
                        height: "130px",
                        borderRadius: "25px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }}>
                        <Flex direction="row" gap={10}>
                            <Image src='https://gb.ru/channels/base/images/benefits/crown_outline_28.svg' alt="pb-2" style={{width: "40px"}}/>   
                            <Box>
                                <p style={{fontWeight: "700"}}>Career prospects</p>
                                <p>Increase your value in the job market</p>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem style={{
                        backgroundColor: "white",
                        padding: "30px 30px",
                        height: "130px",
                        borderRadius: "25px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }}>
                        <Flex direction="row" gap={10}>
                            <Image src='https://gb.ru/channels/base/images/benefits/key_outline_28.svg' alt="pb-3" style={{width: "40px"}}/>   
                            <Box>
                                <p style={{fontWeight: "700"}}>Universal Skills</p>
                                <p>Learn not only the basics, but also advanced tools</p>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem style={{
                        backgroundColor: "white",
                        padding: "30px 30px",
                        height: "130px",
                        borderRadius: "25px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }}>
                        <Flex direction="row" gap={10}>
                            <Image src='https://gb.ru/channels/base/images/benefits/education_outline_28.svg' alt="pb-4" style={{width: "40px"}}/>   
                            <Box>
                                <p style={{fontWeight: "700"}}>Learning by doing</p>
                                <p>Solve over 50 practical problems</p>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem style={{
                        backgroundColor: "white",
                        padding: "30px 30px",
                        height: "130px",
                        borderRadius: "25px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }}>
                        <Flex direction="row" gap={10}>
                            <Image src='https://gb.ru/channels/base/images/benefits/calendar_outline_28.svg' alt="pb-5" style={{width: "40px"}}/>   
                            <Box>
                                <p style={{fontWeight: "700"}}>Quick results</p>
                                <p>Opportunity to find a job within 9 months after the start of training</p>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem style={{
                        backgroundColor: "white",
                        padding: "30px 30px",
                        height: "130px",
                        borderRadius: "25px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }}>
                        <Flex direction="row" gap={10}>
                            <Image src='https://gb.ru/channels/base/images/benefits/speedometer_max_outline_28.svg' alt="pb-1" style={{width: "40px"}}/>   
                            <Box>
                                <p style={{fontWeight: "700"}}>Popular specializations</p>
                                <p>Consciously choose your</p>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </Flex>
    </div>
  )
}

export default SingleProgramPage