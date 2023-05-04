import { Box, Button, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Box style={{ width: "40%", margin: "auto", marginTop: "70px" }}>
                <Heading style={{ margin: "50px 0px" }}>Login</Heading>
                <form action="">
                    <Stack spacing="25px">
                        <Box>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' placeholder='Enter your email address' />
                        </Box>
                        <Box>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' placeholder='Enter your password' />
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