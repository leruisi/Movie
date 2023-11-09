// import React, { createContext, useState } from "react";
// import { MainLayout } from "../Layout/MainLayout";
// import {useThemeLightDark} from "../interface/ThemeInterface";
//
// export const ThemeContext = createContext<useThemeLightDark | null>(null);
// // { theme: 'light' | 'dark'; toggle: () => void }
// const ContexProvider: React.FC = () => {
//     const [theme, setTheme] = useState<'light' | 'dark'>("light");
//
//     const toggle = () => {
//         setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
//     };
//
//     return (
//         <ThemeContext.Provider value={{ theme, toggle }}>
//             <div >
//                 <MainLayout theme={theme}/>
//             </div>
//         </ThemeContext.Provider>
//     );
// };
//
// export { ContexProvider };
// import React, {useState} from 'react';
// import {useThemeLightDark} from "../interface/ThemeInterface";
//
// const ContexProvider = () => {
//     const [theme, setTheme] = useState<useThemeLightDark>()
//     return (
//         <div>
//            
//         </div>
//     );
// };
//
// export default ContexProvider;
import React from 'react';

const ContexProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default ContexProvider;