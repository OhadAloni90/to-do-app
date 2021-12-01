import React from 'react'

export const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
            <h1>Notes App!</h1>
            <button className="save" onClick={()=>handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}> Toggle D mode</button>
        </div>
    )
}

export default Header;
