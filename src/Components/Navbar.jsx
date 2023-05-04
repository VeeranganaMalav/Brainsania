import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {Link} from "react-router-dom";
import logo from '../images/teal-flag-2494-logo.png'
import React from 'react'

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div style={{fontFamily: "Montserrat, sans-serif"}}>
            <Flex minWidth='max-content' alignItems='center' gap='7' px={5}>
                <HStack>
                    <Button colorScheme='gray' onClick={onOpen}>
                        <HamburgerIcon />
                    </Button>
                    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                            <DrawerHeader fontSize="3xl" borderBottomWidth='1px' fontFamily="Montserrat, sans-serif">Programs</DrawerHeader>
                            <DrawerBody style={{fontFamily: "Montserrat, sans-serif"}}>
                                <Stack spacing="24px">
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Information Technology</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Programming</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Analytics</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Testing</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Product and Projects</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>IT Architecture</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Blockchain</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Marketing</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Design</Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>Games</Text>
                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    <Image src={logo} alt='geek-brains-logo' width={200} />
                </HStack>
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}  onClick={onOpen}>Programs</Text>
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>Magazine</Text>
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>Events</Text>
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>Job Search</Text>
                <Spacer />
                <Button colorScheme='gray' _hover={{backgroundColor: "black", color: "white"}}>
                    <Link to="/login" style={{textDecoration: "none"}}>
                        Login
                    </Link>
                </Button>
                <Button colorScheme='gray' _hover={{backgroundColor: "black", color: "white"}}>
                    <Link to="/register" style={{textDecoration: "none"}}>
                        Registration
                    </Link>
                </Button>
            </Flex>
        </div>
    )
}

export default Navbar