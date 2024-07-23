import { useEffect, createContext, useState, useContext } from "react"


const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => {
    const [isloggedIn, setIsLoggedIn] = useState(false)

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
        <LoginContext.Provider value={{ isloggedIn, setIsLoggedIn }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => useContext(LoginContext)