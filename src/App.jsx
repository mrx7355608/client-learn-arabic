import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthContext";

// Pages
import Welcome from "./Pages/Welcome";
const Admin = React.lazy(() => import("./Pages/Admin"));
const AdminDashboardUsers = React.lazy(() => import("./Pages/AdminDashboardUsers"));
const AdminDashboardTests = React.lazy(() => import("./Pages/AdminDashboardTests"));
const AdminDashboardLectures = React.lazy(() => import("./Pages/AdminDashboardLectures"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
// Layouts
import FormLayout from "./Layouts/FormLayout";
import MainLayout from "./Layouts/MainLayout";
import AdminLayout from "./Layouts/AdminLayout";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Welcome />} />
                    </Route>
                    <Route path="admin" element={<AdminLayout />}>
                        <Route index element={<Admin />} />
                        <Route path="users" element={<AdminDashboardUsers />} />
                        <Route path="tests" element={<AdminDashboardTests />} />
                        <Route path="lectures" element={<AdminDashboardLectures />} />
                    </Route>
                    <Route path="auth" element={<FormLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    {/* <Route path="/intensives">
                        <Route index element={<Intensives />} />
                        <Route path=":id" element={<SingleIntensive />} />
                        <Route path=":id/:lectureId" element={<Lecture />} />
                    </Route> */}
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
