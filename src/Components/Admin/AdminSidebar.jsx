import React from "react";
import { Link as ChakraLink, Text, Flex, Button, background } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export default function AdminSidebar() {
    return (
        <section id="sidebar">
            <Flex
                direction="column"
                gap="2"
                p="3"
                justifyContent="start"
                overflow="scroll"
                alignItems="start"
                bg="gray.100"
                minH="100vh"
                w={{ lg: "23vw" }}>
                <Link
                    style={{
                        width: "100%"
                    }}
                    to="/admin">
                    <Button
                        d="flex"
                        p="3"
                        rounded="md"
                        color="gray.700"
                        _hover={{
                            bg: "gray.200",
                            color: "teal.500"
                        }}
                        w="full"
                        justifyContent="space-between">
                        <Text fontWeight={600}>Dashboard</Text>
                        <FaArrowRight />
                    </Button>
                </Link>
                <Link
                    style={{
                        width: "100%"
                    }}
                    to="/admin/users">
                    <Button
                        d="flex"
                        p="3"
                        rounded="md"
                        color="gray.700"
                        _hover={{
                            bg: "gray.200",
                            color: "teal.500"
                        }}
                        w="full"
                        justifyContent="space-between">
                        <Text fontWeight={600}>Users</Text>
                        <FaArrowRight />
                    </Button>
                </Link>
                <Link
                    style={{
                        width: "100%"
                    }}
                    to="/admin/lectures">
                    <Button
                        d="flex"
                        p="3"
                        rounded="md"
                        color="gray.700"
                        _hover={{
                            bg: "gray.200",
                            color: "teal.500"
                        }}
                        w="full"
                        justifyContent="space-between">
                        <Text fontWeight={600}>Lectures</Text>
                        <FaArrowRight />
                    </Button>
                </Link>
                <Link
                    style={{
                        width: "100%"
                    }}
                    to="/admin/tests">
                    <Button
                        d="flex"
                        p="3"
                        rounded="md"
                        color="gray.700"
                        _hover={{
                            bg: "gray.200",
                            color: "teal.500"
                        }}
                        w="full"
                        justifyContent="space-between">
                        <Text fontWeight={600}>Tests</Text>
                        <FaArrowRight />
                    </Button>
                </Link>
            </Flex>
        </section>
    );
}
