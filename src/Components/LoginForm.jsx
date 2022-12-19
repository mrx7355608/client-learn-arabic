import React from "react";
import { Box, Text, Input, Button, FormControl, FormHelperText } from "@chakra-ui/react";

export default function LoginForm() {
    return (
        <form>
            <Box>
                <FormControl>
                    <Input variant="filled" pt="1" type="email" placeholder="Email address" />
                    <FormHelperText></FormHelperText>
                </FormControl>
            </Box>
            <Box mt="4">
                <FormControl>
                    <Input variant="filled" pt="1" type="text" placeholder="Password" />
                    <FormHelperText></FormHelperText>
                </FormControl>
            </Box>
            <Text mt="3" color="teal.700">
                Forgot Password?
            </Text>

            <Button pt="1" w="full" mt="9" colorScheme="teal">
                Login
            </Button>
        </form>
    );
}
