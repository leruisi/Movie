import React, {useState} from 'react';
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./ThemeExport";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
const Theme = () => {

    const [theme, setTheme] = useState("light")
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    return (
        <div >
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <StyledApp>
                    <button style={{ borderRadius: '10px', background:'linear-gradient(90deg, rgba(192, 192, 192, 1) 33%, rgba(70, 130, 180, 1) 100%)' }}
                            onClick={() => themeToggler()}>Change Theme</button>
                </StyledApp>
            </ThemeProvider>
        </div>
    );
};

export {Theme};