import React from "react";
import { Text, Flex, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export default function AdminSidebar() {
    return (
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
        </Flex>
    );
}
