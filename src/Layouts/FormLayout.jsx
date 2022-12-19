import "@fontsource/caramel";
import React from "react";
import { Box, Button, Container, Flex, Heading, Spinner } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function FormLayouts() {
    return (
        <Flex direction="column" w="100vw" h="100vh" alignItems="center" justifyContent="center">
            <Container textAlign="center" mb="9">
                <Heading lineHeight="0.8" fontSize="4xl" letterSpacing="2px">
                    Arabic
                </Heading>
                <Heading lineHeight="0.8" fontSize="4xl" letterSpacing="2px">
                    With
                </Heading>
                <Heading lineHeight="0.8" fontSize="4xl" letterSpacing="2px">
                    Maaz
                </Heading>
            </Container>
            <React.Suspense fallback={<Spinner />}>
                <Outlet />
            </React.Suspense>
        </Flex>
    );
}
