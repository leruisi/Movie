import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#F8F8FF",
    fontColor: "#000",
};

export const darkTheme = {
    body: "#696969",
    fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
