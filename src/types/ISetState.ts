import {ContextState} from "../interface/ThemeInterface";
import {createContext,Dispatch,SetStateAction} from 'react'

export const Context = createContext<[ContextState, Dispatch<SetStateAction<ContextState>>] | null>(null);