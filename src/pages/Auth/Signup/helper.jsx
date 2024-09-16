import * as Yup from 'yup';
import { useRegister } from 'api/UserManagement'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export const useSignupHelper = () => {
    const navigate = useNavigate()

    const { mutate: registerUser, isPending: isRegisteringUser } = useRegister({
        onError: (error) => {
            const registerError = error?.response?.data?.response?.message
            console.log(registerError)
            toast.error(registerError)
        },
        onSuccess: () => {
            toast.success("Registered successfully")
            navigate("/login")
        }
    })

    const registerSchema = Yup.object().shape({
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
        email: Yup.string().email("Enter a valid email").required("Email is required"),
        username: Yup.string()
            .matches(/\d/, "Username must contain at least one number")
            .required("Username is required"),
        password: Yup.string().required("Password is required"),
        termsConditions: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
            .required("Please agree")
    })

    return {
        navigate, registerSchema, registerUser, isRegisteringUser
    }
}
