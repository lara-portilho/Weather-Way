import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		green: {
			500: "#039700",
		},
		blue: {
			500: "#004386",
		},
		sky: {
			200: "#353f4f",
			300: "#59729c",
			500: "#4475ad",
			600: "#c0dcfc",
			700: "#dcded5",
			800: "#74c8db",
			900: "#5ee2ff",
		},
		white: "#F1F1F1",
	},
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
});
