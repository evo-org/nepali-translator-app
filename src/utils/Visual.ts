import { ColorSchemeName } from "react-native";

function isInDarkMode(darkMode: ColorSchemeName) {
    return darkMode === 'dark';
  }

export {isInDarkMode}