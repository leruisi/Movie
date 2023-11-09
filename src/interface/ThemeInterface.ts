
export interface ContextState {
    theme: 'light' | 'dark';
    // toggleTheme: () => void;
}

export interface useThemeLightDark{
    theme: ContextState['theme'];
    toggleTheme: () => void;
}


