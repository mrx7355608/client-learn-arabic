import { theme, extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false
};
const fonts = {
    ...theme.fonts,
    heading: "Caramel, sans-serif"
};
const myTheme = extendTheme({ config, fonts });
export default myTheme;
