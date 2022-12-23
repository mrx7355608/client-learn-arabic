import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

// Components
import AdminSidebar from "../Components/Admin/AdminSidebar";

export default function Admin() {
    return (
        <Flex>
            <AdminSidebar />
            <Heading>Admin Dashboard</Heading>
        </Flex>
    );
}
