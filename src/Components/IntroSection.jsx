import { Box, Flex, Grid, GridItem, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import illustration from '../images/illustartion1.png'

const IntroSection = () => {
  return (
    <div style={{fontFamily: "Montserrat, sans-serif"}}>
        <Flex margin="100px 0px 100px 50px">
            <Stack textAlign="left">
                <p style={{fontWeight: "700", fontSize: "20px"}}>Brainsania - education in IT</p>
                <Box style={{fontWeight: "1000", fontSize: "45px"}}>
                    <Text _hover={{color: "#9d9b9e"}}>Change your profession</Text>
                    <Text _hover={{color: "#9d9b9e"}}>Learn new things</Text>
                    <Text _hover={{color: "#9d9b9e"}}>Find yourself</Text>
                </Box>
                <p style={{fontWeight: "500"}}>We train professions from scratch and provide knowledge in popular specialties and areas in the field of Information Technology.</p>
                <Grid
                    width="100%"
                    pt={50}
                    templateColumns='repeat(3, 1fr)'
                    gap={10}
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
            <Image src={illustration} alt='illustration-design' width="500px"/>
        </Flex>
    </div>
  )
}

export default IntroSection