import React from "react";
import {
    Button,
    Text,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Box
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function SideDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <Box display={{ lg: "none" }}>
            <Button bg="transparent" size="md" p="0" ref={btnRef} onClick={onOpen}>
                <FaBars />
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay backdropFilter="blur(1px)" />
                <DrawerContent textAlign={"center"}>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Link to="/">
                            <Text color="teal">Home</Text>
                        </Link>
                        <Link to="/auth/register">
                            <Text my="3" color="teal">
                                Register
                            </Text>
                        </Link>
                        <Link to="/auth/login">
                            <Text color="teal">Login</Text>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
