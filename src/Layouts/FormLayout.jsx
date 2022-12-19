import "@fontsource/caramel";
import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function FormLayouts() {
    return (
        <Flex direction="column" w="100vw" alignItems="center" justifyContent="center">
            <Container textAlign="center" mt="8" mb="10" mx="0">
                <Heading lineHeight="0.8" fontSize="5xl" letterSpacing="2px">
                    Arabic
                </Heading>
                <Heading lineHeight="0.8" fontSize="5xl" letterSpacing="2px">
                    With
                </Heading>
                <Heading lineHeight="0.8" fontSize="5xl" letterSpacing="2px">
                    Maaz
                </Heading>
            </Container>
            <Outlet />
        </Flex>
    );
}
