import { Flex, Text, Button, Container, Heading } from "@chakra-ui/react";
import React from "react";
import LoginForm from "../Components/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <Container>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading fontFamily="sans-serif" textAlign="left" my="5" fontSize="2xl">
                    Login
                </Heading>
                <Text fontSize="sm" as="b" color="teal.700">
                    <Link to="/">Go Home</Link>
                </Text>
            </Flex>
            <LoginForm />
            <Button _hover={{ background: "gray.700" }} w="full" my="4" color="white" bg="gray.600">
                <Link to="/auth/register">Create account</Link>
            </Button>
        </Container>
    );
}
