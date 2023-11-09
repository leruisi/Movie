import React, {Dispatch, ReactNode, SetStateAction, useState} from "react";
import {ContextState} from "../../interface/ThemeInterface";
import { Context } from "../../types/ISetState";


const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<ContextState>({ theme: 'light' });

    return (
        <Context.Provider value={[state, setState] as [ContextState, Dispatch<SetStateAction<ContextState>>]}>
            {children}
        </Context.Provider>
    );
};
export {
    ContextProvider
};