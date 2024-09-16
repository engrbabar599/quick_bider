import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance, handleAPIRequest } from "./axiosInstance";
import { useLoginContext } from "context/LoginContext";

// done
export const useRegister = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userData) => {
            const response = await handleAPIRequest(axiosInstance.post, "register/", userData)
            return response;
        },
        onSuccess: onSuccess,
        onError: onError,
    })
)

// done
export const useSignIn = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userData) => {
            const response = await handleAPIRequest(axiosInstance.post, "signin/", userData)
            return response;
        },
        onSuccess: onSuccess,
        onError: onError,
    })
)

// done
export const useVerifyEmail = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userData) => {
            const response = await handleAPIRequest(axiosInstance.post, "verify_email/", userData)
            return response;
        },
        onSuccess: onSuccess,
        onError: onError,
    })
)

// done with pagination, waiting on custom pagination component 
export const useGetBankDetails = ({ page }) => (
    useQuery({
        queryKey: ["useGetBankDetails", page],
        queryFn: async ({ queryKey }) => {
            const response = await handleAPIRequest(axiosInstance.get, `bank_detail/?limit=${queryKey[1] * 3}&offset=${queryKey[1] * 3}`)
            return response;
        },
        staleTime: Infinity,
        placeholderData: keepPreviousData,

    })
)

// done 
export const useAddBankDetails = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (bankData) => {
            const response = await handleAPIRequest(axiosInstance.post, "bank_detail/", bankData)
            return response;
        },
        onSuccess: onSuccess,
        onError: onError
    })
)

// done
export const useEditBankDetails = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (bankDetails) => {
            const response = await handleAPIRequest(axiosInstance.patch, `bank_detail/${bankDetails?.id}/`, bankDetails)
            return response;
        },
        onSuccess: onSuccess,
        onError: onError
    })
)

// done
export const useDeleteBankDetails = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (id) => {
            const response = await handleAPIRequest(axiosInstance.delete, `bank_detail/${id}/`)
            return response;
        },
        onSuccess: onSuccess,
        onError: onError
    })
)

export const useGetTestimonials = () => (
    useQuery({
        queryKey: ["useGetTestimonials"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "testimonial/")
            return response;
        },
        staleTime: Infinity
    })
)

export const useAddTestimonial = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (testimonialData) => {
            const response = await handleAPIRequest(axiosInstance.post, "testimonial/", testimonialData)
            return response;
        },
        onSuccess: onSuccess,
        onError: onError
    })
)

export const useDeleteTestimonial = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (testimonialId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `testimonial/${testimonialId}/`)
            return response;
        },
        onSuccess: onSuccess,
        onError: onError
    })
)

export const useGetTestimonialReaction = () => (
    useQuery({
        queryKey: ["useGetTestimonialReaction"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "testimonial_reaction/")
            return response;
        },
        staleTime: Infinity
    })
)

export const useAddTestimonialReaction = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (testimonialReactionData) => {
            const response = await handleAPIRequest(axiosInstance.post, "testimonial_reaction/", testimonialReactionData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess,
    })
)

// done, integration the all the pages pending
export const useGetUserProfile = () => {
    const { isLoggedIn } = useLoginContext()

    return (
        useQuery({
            queryKey: ["useGetUserProfile"],
            queryFn: async () => {
                const response = await handleAPIRequest(axiosInstance.get, "user_profile/")
                return response?.results[0];
            },
            enabled: isLoggedIn,
            staleTime: Infinity
        })
    )
}


export const useUpdateUserProfile = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userData) => {
            console.log(userData)
            const response = await handleAPIRequest(axiosInstance.patch, `user_profile/${userData?.get("id")}/`, userData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteUserProfile = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `user_profile/${userId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

// Pending changes
export const useGetWallet = () => (
    useQuery({
        queryKey: ["useGetWallet"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, `wallet/`)
            return response;
        },
        staleTime: Infinity
    })
)

export const useAddWallet = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (walletData) => {
            const response = await handleAPIRequest(axiosInstance.post, `wallet/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteWallet = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (walletId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `wallet/${walletId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useGetRecentTransaction = () => (
    useQuery({
        queryKey: ["useGetRecentTransaction"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, `recent_transaction/`)
            return response;
        },
        staleTime: Infinity
    })
)

export const useAddRecentTransaction = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (transactionData) => {
            const response = await handleAPIRequest(axiosInstance.post, `recent_transaction/`, transactionData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteRecentTransaction = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (transactionId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `recent_transaction/${transactionId}`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

// done on help and support
export const useSendEnquiry = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (enquiryData) => {
            const response = await handleAPIRequest(axiosInstance.post, `send_enquiry/`, enquiryData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

// done
export const useGetCardDetails = () => (
    useQuery({
        queryKey: ["useGetCardDetails"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, `card_detail/`)
            return response?.results;
        },
        staleTime: Infinity
    })
)

// done
export const useAddCardDetails = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (cardData) => {
            const response = await handleAPIRequest(axiosInstance.post, `card_detail/`, cardData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useEditCardDetails = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (cardData) => {
            const response = await handleAPIRequest(axiosInstance.patch, `card_detail/${cardData?.id}/`, cardData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)


export const useGetRecentWinners = () => (
    useQuery({
        queryKey: ["useGetRecentWinners"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "recent_winner/")
            return response.results;
        },
        staleTime: Infinity
    })
)

export const useGetUserClaims = () => (
    useQuery({
        queryKey: ["useGetUserClaims"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "claim_now/")
            return response.results;
        },
        staleTime: Infinity
    })
)


export const useGetAllInvestors = (investmentId = "") => (
    useQuery({
        queryKey: ["useGetAllInvestors", investmentId],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, `all_investors/?investment_project=${investmentId}`)
            return response?.results
        },
        staleTime: Infinity
    })

)