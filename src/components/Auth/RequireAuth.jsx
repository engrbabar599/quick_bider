import React from 'react'
import { useLoginContext } from '../../sdfsdjfgdsjfs/LoginContext'
import { Navigate, Outlet } from 'react-router-dom'

export const RequireAuth = () => {
    const { isLoggedIn } = useLoginContext()
    const token = localStorage.getItem("token")


    return (
        isLoggedIn || token ?
            <Outlet /> :
            <Navigate to={"/login"} replace />
    )
}
