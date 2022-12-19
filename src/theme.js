import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false
};

const myTheme = extendTheme({ config });
export default myTheme;
