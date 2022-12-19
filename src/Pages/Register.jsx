import React from "react";
import { Text, Flex, Button, Container, Heading } from "@chakra-ui/react";
import RegisterationForm from "../Components/RegisterationForm";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <Container>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading fontFamily="sans-serif" textAlign="left" my="5" fontSize="2xl">
                    Register
                </Heading>
                <Text fontSize="sm" as="b" color="teal.700">
                    <Link to="/">Go Home</Link>
                </Text>
            </Flex>
            <RegisterationForm />
            <Text textAlign="center" mt="5">
                Already a member?
                <Text as="b" color="teal.800">
                    <Link to="/auth/login">Login</Link>
                </Text>
            </Text>
        </Container>
    );
}
