import { Button, Heading, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Flex
            pos="fixed"
            top="0"
            bg="whiteAlpha.600"
            zIndex="20000"
            backdropFilter="blur(2px)"
            justifyContent={{ base: "space-between", lg: "space-around" }}
            alignItems="center"
            w="full"
            p="3">
            <Heading>ArabicWithMaaz</Heading>
            <SideDrawer />
            <Flex gap="8" alignItems="center" display={{ base: "none", lg: "flex" }}>
                <Link to="/">
                    <Text
                        _hover={{
                            color: "teal.500"
                        }}
                        fontWeight="300"
                        fontSize="sm"
                        color="gray.600">
                        Home
                    </Text>
                </Link>
                <Link to="/auth/register">
                    <Text
                        _hover={{
                            color: "teal.500"
                        }}
                        fontWeight="300"
                        fontSize="sm"
                        color="gray.600">
                        Register
                    </Text>
                </Link>
                <Link to="/auth/register">
                    <Text
                        _hover={{
                            color: "teal.500"
                        }}
                        fontWeight="300"
                        fontSize="sm"
                        color="gray.600">
                        Lectures
                    </Text>
                </Link>
                <Link to="/auth/login">
                    <Text
                        _hover={{
                            color: "teal.500"
                        }}
                        fontWeight="300"
                        fontSize="sm"
                        color="gray.600">
                        Login
                    </Text>
                </Link>
                <Link to="/admin">
                    <Text
                        _hover={{
                            color: "teal.500"
                        }}
                        fontWeight="300"
                        fontSize="sm"
                        color="gray.600">
                        Admin
                    </Text>
                </Link>
                <Link to="/auth/login">
                    <Button
                        _hover={{
                            bg: "teal.500",
                            color: "white"
                        }}
                        border="2px"
                        rounded="full"
                        borderColor="teal.500"
                        p="3"
                        fontWeight="600"
                        py="2"
                        pt="3"
                        fontSize="sm"
                        color="teal.500">
                        Download Workbook
                    </Button>
                </Link>
            </Flex>
        </Flex>
    );
}
