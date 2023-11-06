import { Box, Flex, Grid, GridItem, Heading, Input, Radio, RadioGroup, Spacer, Stack, Text, VStack, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';

const Design = () => {

    const [designData, setDesignData] =  useState([]);
    const [query, setQuery] = useState("");
    const [level, setLevel] = useState("");

    const [isLarge] = useMediaQuery('(min-width: 62em)');

    const fetchProgramsBySearch = (query) => {
        return `https://teal-flag-2494-json-server.onrender.com/design?q=${query}`;
    }

    const fetchProgramsByLevel = (level) => {

        if(level === ""){
            return `https://teal-flag-2494-json-server.onrender.com/design`;
        }
        else{
            return `https://teal-flag-2494-json-server.onrender.com/design?level=${level}`;
        }
    }

    useEffect(() => {

        let fetchURL;
        if(query !== ""){
            fetchURL = fetchProgramsBySearch(query); 
        }
        else{
            fetchURL = fetchProgramsByLevel(level);
        }

        axios({
            url : fetchURL,
            method : 'get'
        })
        .then((res) => {
            setDesignData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [query, level]);


  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Navbar />
            <Heading 
                style={{ textAlign: "left", padding: "30px 30px" }} 
                fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
            >Design</Heading>
            <Flex bg="gray.100" style={{ padding: "60px 30px" }} flexDirection={ isLarge ? "row" : "column" } minH={"100vh"}>
                <Stack w="25%" spacing="30px" mb={"100px"}>
                    <Box 
                        w={{ base: "400%", md: "400%", lg: "100%" }} 
                        style={{ borderRadius: "25px", background: "white", padding: "20px 20px" }}
                    >
                        <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Program Search</Text>
                        <Input type="text" placeholder="The name of the program ..." onChange={(e) => setQuery(e.target.value)}/>
                    </Box>
                    <Box 
                        w={{ base: "400%", md: "400%", lg: "100%" }} 
                        style={{ borderRadius: "25px", background: "white", padding: "20px 20px" }}
                    >
                        <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Level</Text>
                        <RadioGroup value={level}>
                            <Stack spacing={5} direction={ isLarge ? 'column' : 'row' }>
                                <Radio colorScheme='blue' value='' onChange={(e) => setLevel(e.target.value)}>
                                    All
                                </Radio>
                                <Radio colorScheme='blue' value='advanced' onChange={(e) => setLevel(e.target.value)}>
                                    Advanced
                                </Radio>
                                <Radio colorScheme='blue' value='intermediate' onChange={(e) => setLevel(e.target.value)}>
                                    Intermediate
                                </Radio>
                                <Radio colorScheme='blue' value='beginner' onChange={(e) => setLevel(e.target.value)}>
                                    Beginner
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Stack>
                <Spacer />
                <Grid
                    w={{ base: "90%", md: "90%", lg: "70%" }}
                    margin="auto"
                    templateColumns='repeat(2, 1fr)'
                    gap={20}
                >
                    {
                        designData.map((program) => (
                            <Link key={program.id} to={`/programs/${program.id}`}>
                                <GridItem 
                                    h={{ base: "370px", md: "370px", lg: "340px" }}
                                    style={{ borderRadius: "25px", padding: "15px", backgroundColor: "white", textAlign: "left", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", position: "relative" }}
                                >
                                    <Heading style={{ textAlign: "left" }}>{program.title}</Heading>
                                    <Box my={6}>
                                        <p style={{ textAlign: "left" }}>{program.description}</p>
                                    </Box>
                                    <Box style={{position : "absolute", bottom: "20px"}}>
                                        <p><span style={{fontWeight: "600"}}>Duration : </span>{program.duration}</p>
                                        <p><span style={{fontWeight: "600"}}>Level : </span>{program.level}</p>
                                    </Box>
                                </GridItem>
                            </Link>
                        ))
                    }
                </Grid>
            </Flex>
        </div>
  )
}

export default Design