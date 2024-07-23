import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance, handleAPIRequest } from "./axiosInstance";


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

export const useGetBankDetails = () => (
    useQuery({
        queryKey: ["useGetBankDetails"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "bank_detail/")
            return response;
        },
        staleTime: Infinity,
    })
)

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

export const useGetTestimonials = ({ onError, onSuccess }) => (
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

export const useGetUserProfile = () => (
    useQuery({
        queryKey: ["useGetUserProfile"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "user_profile/")
            return response;
        },
        staleTime: Infinity
    })
)

export const useAddUserProfile = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userData) => {
            const response = await handleAPIRequest(axiosInstance.post, "user_profile/", userData)
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



// export const useGetAuctionManagement = () => (
//     useQuery({
//         queryKey: ["useGetRecentTransaction"],
//         queryFn: async () => {
//             const response = await handleAPIRequest(axiosInstance.get, `recent_transaction/`)
//             return response;
//         },
//         staleTime: Infinity
//     })
// )



