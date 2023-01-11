import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext';

const JustAComponent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#fff',
        color: darkTheme ? '#fff' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>Just a theme</div>
        </>
    )
}

export default JustAComponent;