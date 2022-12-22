import { Box, Heading, Flex, Text } from "@chakra-ui/react";
// TODO: change footer bg color according to color mode

export default function Footer() {
    return (
        <Flex
            pos="absolute"
            top="full"
            direction="column"
            gap="1"
            justifyContent="center"
            alignItems="center"
            w="full"
            p="4">
            <Box mb="3" textAlign="center">
                <Heading
                    lineHeight="0.8"
                    fontSize={{ base: "xl", md: "3xl", xl: "4xl" }}
                    letterSpacing="2px">
                    Arabic
                </Heading>
                <Heading
                    lineHeight="0.8"
                    fontSize={{ base: "xl", md: "3xl", xl: "4xl" }}
                    letterSpacing="2px">
                    With
                </Heading>
                <Heading
                    lineHeight="0.8"
                    fontSize={{ base: "xl", md: "3xl", xl: "4xl" }}
                    letterSpacing="2px">
                    Maaz
                </Heading>
            </Box>

            <Text fontSize={{ base: "11px", md: "14px", lg: "15px" }}>
                A project to ease us in our study of arabic language
            </Text>
        </Flex>
    );
}
