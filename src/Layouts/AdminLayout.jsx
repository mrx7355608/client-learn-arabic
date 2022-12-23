import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import AdminSidebar from "../Components/Admin/AdminSidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AdminLayout() {
    return (
        <Box>
            <Navbar />
            <Flex>
                <AdminSidebar />
                <React.Suspense fallback={<Spinner />}>
                    <section id="sect">
                        <Outlet />
                    </section>
                </React.Suspense>
            </Flex>
            <Footer />
        </Box>
    );
}
