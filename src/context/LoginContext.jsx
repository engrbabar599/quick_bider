import { useEffect, createContext, useState, useContext } from "react"


const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }
    }, [])

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => useContext(LoginContext)