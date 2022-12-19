import React from "react";
import { Box, Flex, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";

export default function RegisterationForm() {
    return (
        <form>
            <Flex gap="3" w="full" justifyContent="space-between">
                <FormControl>
                    <Input variant="filled" pt="1" type="text" placeholder="First name" />
                    <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl>
                    <Input variant="filled" pt="1" type="text" placeholder="Last name" />
                    <FormHelperText></FormHelperText>
                </FormControl>
            </Flex>
            <Box mt="2">
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
            <Box mt="4">
                <FormControl>
                    <Input variant="filled" pt="1" type="text" placeholder="Confirm Password" />
                    <FormHelperText></FormHelperText>
                </FormControl>
            </Box>

            <Button pt="1" w="full" mt="8" colorScheme="teal">
                Register
            </Button>
        </form>
    );
}
