import { Box, Button, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React from 'react'

const Registration = () => {
    return (
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Box style={{ width: "40%", margin: "auto", marginTop: "70px" }}>
                <Heading style={{ margin: "50px 0px" }}>Register</Heading>
                <form action="">
                    <Stack spacing="25px">
                        <Box>
                            <FormLabel>Full Name</FormLabel>
                            <Input type='text' placeholder='Enter your Full Name' />
                        </Box>
                        <Box>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' placeholder='Enter your email address' />
                        </Box>
                        <Box>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' placeholder='Enter your password' />
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