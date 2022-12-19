import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import myTheme from "./theme";
import AuthProvider from "./Contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={myTheme}>
            <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
            <AuthProvider>
                <App />
            </AuthProvider>
        </ChakraProvider>
    </React.StrictMode>
);
