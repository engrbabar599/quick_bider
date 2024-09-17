import { useSignIn } from 'api/UserManagement'
import { useLoginContext } from 'sdfsdjfgdsjfs/LoginContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { object, string } from 'yup'

export const useLoginHelper = () => {
    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn } = useLoginContext()

    const loginSchema = object({
        email: string().email("Enter a valid email").required("Email is required"),
        password: string().required("Password is required")
    })

    const { mutate: siginUser, isPending } = useSignIn({
        onError: (error) => {
            const apiError = error?.response?.data?.response?.message
            console.log(apiError)
            toast.error(apiError)
        },
        onSuccess: async (data) => {
            console.log(data)
            localStorage.setItem("token", data?.response?.access_token)
            setIsLoggedIn(true)
            navigate("/dashboard")
        }
    })


    useEffect(() => {
        if (isLoggedIn) {
            navigate("/dashboard")
        }
    }, [isLoggedIn])


    return {
        isLoggedIn, setIsLoggedIn, loginSchema, siginUser, isPending
    }
}
