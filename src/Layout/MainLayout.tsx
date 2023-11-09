import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
// import styled from "styled-components";

// interface MainLayoutProps {
//     theme: 'light' | 'dark';
//     children?: React.ReactNode;
// }
//
// const StyledMainLayout = styled.div<{ theme: 'light' | 'dark' }>`
//
//   background-color: ${(props: { theme: string; }) => (props.theme === 'light' ? '#FFFFFF' : '#222222')};
//   color: ${(props: { theme: string; }) => (props.theme === 'light' ? '#000000' : '#FFFFFF')};
//
//
// `;


const MainLayout=() => {
    return (
        <div>

            <Header  />
           <Outlet/>

        </div>
    );
};

export {MainLayout};