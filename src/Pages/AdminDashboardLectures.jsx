import React from "react";
import {
    FormControl,
    FormHelperText,
    Input,
    Button,
    Box,
    Flex,
    Heading,
    Text,
    Divider,
    VStack,
    ButtonGroup
} from "@chakra-ui/react";

export default function AdminDashboardLectures() {
    const lectures = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <VStack justify="center" align="center" m="4" p="6" rounded="lg" bg="teal.50" gap="2">
                {lectures.map((lecture) => {
                    return (
                        <Box>
                            <Flex gap="9">
                                <Heading fontSize="lg" fontFamily="">
                                    Lecture {lecture}
                                </Heading>
                                <Text>Some data about lecture</Text>
                                <Text>Some data about lecture</Text>
                                <ButtonGroup gap="2">
                                    <Button fontSize="sm" colorScheme="yellow" size="sm">
                                        Edit
                                    </Button>
                                    <Button fontSize="sm" colorScheme="red" size="sm">
                                        Delete
                                    </Button>
                                </ButtonGroup>
                            </Flex>
                            <Divider />
                        </Box>
                    );
                })}
            </VStack>
            <form>
                <Heading fontFamily="sans-serif">Post Lectures</Heading>
                <Box mt="2">
                    <FormControl>
                        <Input variant="filled" pt="1" type="text" placeholder="Title" />
                        <FormHelperText></FormHelperText>
                    </FormControl>
                </Box>
                <Box mt="4">
                    <FormControl>
                        <Input variant="filled" pt="1" type="text" placeholder="Summary" />
                        <FormHelperText></FormHelperText>
                    </FormControl>
                </Box>
                <Box mt="4">
                    <FormControl>
                        <Input variant="filled" pt="1" type="text" placeholder="Homework" />
                        <FormHelperText></FormHelperText>
                    </FormControl>
                </Box>
                <Box mt="4">
                    <FormControl>
                        <Input variant="filled" pt="1" type="text" placeholder="Topics" />
                        <FormHelperText></FormHelperText>
                    </FormControl>
                </Box>
                <Button pt="1" w="full" mt="8" colorScheme="teal">
                    Create
                </Button>
            </form>
        </>
    );
}
