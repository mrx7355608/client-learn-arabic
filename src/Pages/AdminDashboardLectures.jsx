import React from "react";
import { Button, Box, Flex, Heading, Text, Divider, VStack, ButtonGroup } from "@chakra-ui/react";

export default function AdminDashboardLectures() {
    const lectures = [1, 2, 3, 4, 5, 6];
    return (
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
    );
}
