import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Spacer, Stack, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import logo from '../images/teal-flag-2494-logo.png'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';

const Navbar = () => {

    const { isAuth, user, logout } = useContext(AuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure();


    const [isLarge] = useMediaQuery('(min-width: 62em)');

    return (
        // <div style={{ fontFamily: "Montserrat, sans-serif" }}>
        //     <Flex minWidth='max-content' alignItems='center' gap='7' px={5}>
        //         <HStack>
        //             <Button colorScheme='gray' onClick={onOpen}>
        //                 <HamburgerIcon />
        //             </Button>
        //             <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        //                 <DrawerOverlay />
        //                 <DrawerContent>
        //                     <DrawerCloseButton />
        //                     <DrawerHeader fontSize="3xl" borderBottomWidth='1px' fontFamily="Montserrat, sans-serif">Programs</DrawerHeader>
        //                     <DrawerBody style={{ fontFamily: "Montserrat, sans-serif" }}>
        //                         <Stack spacing="24px">
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
        //                                 <Link to='/ittraining'>
        //                                     Information Technology
        //                                 </Link>
        //                             </Text>
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
        //                                 <Link to='/programming'>
        //                                     Programming
        //                                 </Link>
        //                             </Text>
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
        //                                 <Link to='/ittraining'>
        //                                     Analytics
        //                                 </Link>
        //                             </Text>
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
        //                                 <Link to='/ittraining'>
        //                                     Testing
        //                                 </Link>
        //                             </Text>
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
        //                                 <Link to='/ittraining'>
        //                                     Product and Projects
        //                                 </Link>
        //                             </Text>
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
        //                                 <Link to='/ittraining'>
        //                                     IT Architecture
        //                                 </Link>
        //                             </Text>
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>Blockchain</Text>
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>Marketing</Text>
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>
        //                                 <Link to='/design'>
        //                                     Design
        //                                 </Link>
        //                             </Text>
        //                             <Text fontSize="xl" _hover={{ color: "#9d9b9e" }}>Games</Text>
        //                         </Stack>
        //                     </DrawerBody>
        //                 </DrawerContent>
        //             </Drawer>
        //             <Link to='/'>
        //                 {/* <Image src={logo} alt='geek-brains-logo' width={200} /> */}
        //                 <img src={"https://drive.google.com/uc?id=124-9YxZqrQn7FFUwRfvud_GCfhjXGByR"} alt='geek-brains-logo' width={200} />
        //             </Link>
        //         </HStack>
        //         <Text fontSize="xl" fontWeight={700} _hover={{ color: "#9d9b9e" }} onClick={onOpen}>Programs</Text>
        //         {
        //             isAuth ? (
        //                 <Link to={`/users/${user.id}`}>
        //                     <Text fontSize="xl" fontWeight={700} _hover={{ color: "#9d9b9e" }}>My Learning</Text>
        //                 </Link>
        //             ) : (
        //                 null
        //             )
        //         }
        //         <Text fontSize="xl" fontWeight={700} _hover={{ color: "#9d9b9e" }}>Events</Text>
        //         <Text fontSize="xl" fontWeight={700} _hover={{ color: "#9d9b9e" }}>Job Search</Text>
        //         <Spacer />
        //         {
        //             isAuth ? (
        //                 <HStack>
        //                     <Text>Hi, {user.name}</Text>
        //                     <Spacer />
        //                     <Button colorScheme='gray' _hover={{ backgroundColor: "black", color: "white" }} onClick={logout}>
        //                         Logout
        //                     </Button>
        //                 </HStack>
        //             ) : (
        //                 <HStack>
        //                     <Link to="/login" style={{ textDecoration: "none" }}>
        //                         <Button colorScheme='gray' _hover={{ backgroundColor: "black", color: "white" }}>
        //                             Login
        //                         </Button>
        //                     </Link>
        //                     <Spacer />
        //                     <Link to="/register" style={{ textDecoration: "none" }}>
        //                         <Button colorScheme='gray' _hover={{ backgroundColor: "black", color: "white" }}>
        //                             Registration
        //                         </Button>
        //                     </Link>
        //                 </HStack>
        //             )
        //         }
        //     </Flex>
        // </div>









        // ------------------------------------------ SECOND IMPLEMENTATION -------------------------------------------------
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
    )
}

export default Navbar