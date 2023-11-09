import {useContext} from "react";
import {Context} from "../../types/ISetState";
import {useThemeLightDark} from "../../interface/ThemeInterface";



const useTheme = (): useThemeLightDark => {
    const [state, setState] = useContext(Context);

    const toggleTheme = () => {
        setStates((prevState) => ({ theme: prevState.theme === 'light' ? 'dark' : 'light' }));
    };

    return {
        theme: state?.theme,
        toggleTheme,
    };
};

export {
    useTheme
};