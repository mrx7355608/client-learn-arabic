import React from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <React.Suspense fallback={<Spinner />}>
                    <Outlet />
                </React.Suspense>
            </main>
            <Footer />
        </>
    );
}
