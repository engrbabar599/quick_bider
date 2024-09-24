import { useSendEnquiry } from 'api/UserManagement'
import { email_regex, phone_regex } from 'constants/regex'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

export const useSupportHelper = () => {
    const formikRef = useRef(null)

    const enquirySchema = Yup.object().shape({
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
        phone_number: Yup.string()
            .min(10, "Enter a valid number")
            .matches(phone_regex, "Enter a valid number")
            .required("Phone number is required"),
        email: Yup.string().matches(email_regex, "Enter a email").required("Email is required"),
        message: Yup.string().required("Message is required")
    })

    const { mutate: sendEnquiry, isPending: isSendingEnquiry } = useSendEnquiry({
        onError: (error) => {
            console.log(error)
            toast.error("Something went wrong")
        },
        onSuccess: (data) => {
            console.log(data)
            formikRef.current.resetForm()
            toast.success("Enquiry sent successfully")
        }
    })

    return {
        sendEnquiry, isSendingEnquiry, enquirySchema, formikRef
    }
}
