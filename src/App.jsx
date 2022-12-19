import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthContext";

// Pages
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// const Login = React.lazy(() => import("./Pages/Login"));
// const Register = React.lazy(() => import("./Pages/Register"));
// Layouts
import FormLayout from "./Layouts/FormLayout";
import MainLayout from "./Layouts/MainLayout";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Welcome />} />
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
