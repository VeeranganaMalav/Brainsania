import { Box, Button, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const Registration = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        let {name, value} = e.target;

        setFormData({...formData, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        

        // axios({
        //     url : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,
        //     method: 'post',
        //     data : formData
        // });
    }

    return (
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Box style={{ width: "40%", margin: "auto", marginTop: "70px" }}>
                <Heading style={{ margin: "50px 0px" }}>Register</Heading>
                <form onSubmit={handleSubmit}>
                    <Stack spacing="25px">
                        <Box>
                            <FormLabel>Full Name</FormLabel>
                            <Input type='text' name="name" value={formData.name} placeholder='Enter your Full Name' onChange={handleChange}/>
                        </Box>
                        <Box>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' name="email" value={formData.email} placeholder='Enter your email address' onChange={handleChange}/>
                        </Box>
                        <Box>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' name="password" value={formData.password} placeholder='Enter your password' onChange={handleChange}/>
                        </Box>
                        <Box>
                            <Button type='submit' _hover={{backgroundColor: "black", color:"white"}}>Register</Button>
                        </Box>
                    </Stack>
                </form>
            </Box>
        </div>
    )
}

export default Registration