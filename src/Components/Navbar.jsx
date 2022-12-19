import { Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Box p="3">
            <Heading>ArabicWithMaaz</Heading>
            <Link to="/">
                <Text color="teal">Home</Text>
            </Link>
            <Link to="/auth/register">
                <Text color="teal">Register</Text>
            </Link>
            <Link to="/auth/login">
                <Text color="teal">Login</Text>
            </Link>
        </Box>
    );
}
