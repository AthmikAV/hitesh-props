import {  createContext,  useContext,  useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((theme) => (
            theme === 'light' ? 'dark' : 'light'
        ))
    };
    const value = {
        theme,
        toggleTheme,
        isDark : theme === 'dark'
    }
    
    return (
        <ThemeContext.Provider value={value}>{ children}</ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);