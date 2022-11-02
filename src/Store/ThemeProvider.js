import { createContext, useContext, useReducer } from "react"

const themeContext = createContext()

const initialState = "dark"

const reducer = (state) => {
    if (state == 'light') {
        return 'dark'
    }
    else return 'light'
}



function ThemeProvider({ children }) {
    return (
        <themeContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </themeContext.Provider>
    )
}


export const useTheme = () => useContext(themeContext)
export default ThemeProvider    