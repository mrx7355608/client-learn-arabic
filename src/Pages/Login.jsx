import { Button, Container, Heading } from "@chakra-ui/react";
import React from "react";
import LoginForm from "../Components/LoginForm";

export default function Login() {
    return (
        <Container>
            <Heading fontFamily="sans-serif" textAlign="left" fontSize="3xl">
                Login
            </Heading>
            <LoginForm />
            <Button w="full" my="4" colorScheme="gray">
                Create account
            </Button>
        </Container>
    );
}
