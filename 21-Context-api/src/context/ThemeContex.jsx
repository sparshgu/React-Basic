import React from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()
const ThemeContex = (props) => {
  return (
    <div>
        <ThemeContext.Provider value={"Prince Gupta"}>
            {props.children}
        </ThemeContext.Provider>
    </div>
  )
}

export default ThemeContex