import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import RegisterationForm from "../Components/RegisterationForm";

export default function Register() {
    return (
        <Container>
            <Heading fontFamily="sans-serif" textAlign="left" mt="9" mb="5" fontSize="3xl">
                Register
            </Heading>
            <RegisterationForm />
        </Container>
    );
}
