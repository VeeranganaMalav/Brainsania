import { Box, Button, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        let {name, value} = e.target;

        setFormData({...formData, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);

        axios({
            url : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,
            method: 'get'
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <div>
        <Box style={{ width: "40%", margin: "auto", marginTop: "70px" }}>
                <Heading style={{ margin: "50px 0px" }}>Login</Heading>
                <form onSubmit={handleSubmit}>
                    <Stack spacing="25px">
                        <Box>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' name="email" placeholder='Enter your email address' onChange={handleChange}/>
                        </Box>
                        <Box>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' name="password" placeholder='Enter your password' onChange={handleChange}/>
                        </Box>
                        <Box>
                            <Button type='submit' _hover={{backgroundColor: "black", color:"white"}}>Login</Button>
                        </Box>
                    </Stack>
                </form>
            </Box>
    </div>
  )
}

export default Login