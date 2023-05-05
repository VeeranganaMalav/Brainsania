import { Box, Grid, GridItem, HStack, Heading, Input, Radio, RadioGroup, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ITTraining = () => {
    return (
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Heading style={{ textAlign: "left", padding: "30px 30px" }}>IT Training</Heading>
            <HStack spacing="35px" bg="gray.100" style={{ padding: "60px 30px" }}>
                <VStack w="30%" spacing="30px">
                    <Box w="100%" style={{ borderRadius: "25px", background: "white", padding: "20px 20px" }}>
                        <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Program Search</Text>
                        <Input type="text" placeholder="The name of the program ..." />
                    </Box>
                    <Box w="100%" style={{ borderRadius: "25px", background: "white", padding: "20px 20px" }}>
                        <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Specializations</Text>
                        <RadioGroup>
                            <Stack spacing={5} direction='column'>
                                <Radio colorScheme='blue' value='testing'>
                                    Testing
                                </Radio>
                                <Radio colorScheme='blue' value='analytics'>
                                    Analytics
                                </Radio>
                                <Radio colorScheme='blue' value='programing'>
                                    Programming
                                </Radio>
                                <Radio colorScheme='blue' value='project management'>
                                    Project Management
                                </Radio>
                                <Radio colorScheme='blue' value='architecture'>
                                    Architecture
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box w="100%" style={{ borderRadius: "25px", background: "white", padding: "20px 20px" }}>
                        <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Level</Text>
                        <RadioGroup>
                            <Stack spacing={5} direction='column'>
                                <Radio colorScheme='blue' value='advanced'>
                                    Advanced
                                </Radio>
                                <Radio colorScheme='blue' value='intermediate'>
                                    Intermediate
                                </Radio>
                                <Radio colorScheme='blue' value='beginner'>
                                    Beginner
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </VStack>
                <Grid
                    width="90%"
                    margin="auto"
                    marginTop={50}
                    templateColumns='repeat(2, 1fr)'
                    gap={20}
                >
                    <GridItem style={{ border: "1px solid red", borderRadius: "25px", padding: "15px" }}>
                        <Heading style={{ textAlign: "left" }}>Developer</Heading>
                        <p style={{ textAlign: "left" }}>You will learn fundamental knowledge in IT and level up in the direction of product management. Get a sought-after profession and the opportunity to open a business in the field of information technology.</p>
                        <p>Specialization</p>
                        <p>Duration</p>
                        <p>Level</p>
                    </GridItem>
                </Grid>
            </HStack>
        </div>
    )
}

export default ITTraining