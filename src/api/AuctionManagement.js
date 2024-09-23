import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance, handleAPIRequest } from "./axiosInstance";

// For getting the auction
export const useGetAuction = ({ page } = { page: 0 }) => (
    useQuery({
        queryKey: ["useGetAuction", page],
        queryFn: async ({ queryKey }) => {
            const response = await handleAPIRequest(axiosInstance.get, `auction/?limit=${queryKey[1] * 3}&offset=${queryKey[1] * 3}`,)
            return response;
        },
        staleTime: Infinity
    })
)

export const useAddAuction = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (auctionData) => {
            const response = await handleAPIRequest(axiosInstance.post, `auction/`, auctionData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteAuction = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (auctionId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `auction/${auctionId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

// Give random auction participants
export const useGetAuctionParticipant = () => (
    useQuery({
        queryKey: ["useGetAuctionParticipant"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, `auction_participant/`)
            return response;
        },
        staleTime: Infinity
    })
)

export const useAddAuctionParticipant = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (auctionParticipantData) => {
            const response = await handleAPIRequest(axiosInstance.post, `auction_participant/`, auctionParticipantData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteAuctionParticipant = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (auctionParticipantId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `auction_participant/${auctionParticipantId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

// Gives the bids of a auction no filter yet
export const useGetAuctionBid = () => (
    useQuery({
        queryKey: ["useGetAuctionBid"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "auction_bid/")
            return response
        },
        staleTime: Infinity
    })
)

export const useAddAuctionBid = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (auctionBidData) => {
            const response = await handleAPIRequest(axiosInstance.post, `auction_bid/`, auctionBidData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteAuctionBid = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (auctionBidId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `auction_bid/${auctionBidId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

// Gives bid participants
export const useGetBidParticipant = () => (
    useQuery({
        queryKey: ["useGetBidParticipant"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "bid_participant/")
            return response
        },
        staleTime: Infinity
    })
)

export const useAddBidParticipant = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (bidParticipantData) => {
            const response = await handleAPIRequest(axiosInstance.post, `bid_participant/`, bidParticipantData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteBidParticipant = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (bidParticipantId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `bid_participant/${bidParticipantId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

// Fetches all teh investment projets
export const useGetInvestmentProject = () => (
    useQuery({
        queryKey: ["useGetInvestmentProject"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, `investment_project/`)
            return response
        },
        staleTime: Infinity
    })
)


export const useGetSingleInvestmentProject = (projectId) => (
    useQuery({
        queryKey: ["useGetSingleInvestmentProject", projectId],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, `investment_project/${projectId ? projectId : ""}/`)
            return response
        },
        staleTime: Infinity
    })
)

// export const useGetInvestmentProject = (projectId) => (
//     useQuery({
//         queryKey: ["useGetInvestmentProject"],
//         queryFn: async () => {
//             const response = await handleAPIRequest(axiosInstance.get, `investment_project/${projectId ? `id=projectId` : ""}`)
//             return response
//         },
//         staleTime: Infinity
//     })
// )

export const useAddInvestmentProject = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (investmentProjectData) => {
            const response = await handleAPIRequest(axiosInstance.post, `investment_project/`, investmentProjectData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteInvestmentProject = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (investmentProjectId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `investment_project/${investmentProjectId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

// Gets the user investment not working as of now
export const useGetUserInvestment = ({ is_active = "True" }) => (
    useQuery({
        queryKey: ["useGetUserInvestment", is_active],
        queryFn: async ({ queryKey }) => {
            const response = await handleAPIRequest(axiosInstance.get, `user_investment/?is_active=${queryKey[1]}`)
            return response
        },
        staleTime: Infinity
    })
)

export const useAddUserInvestment = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userInvestmentData) => {
            const response = await handleAPIRequest(axiosInstance.post, `user_investment/`, userInvestmentData)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteUserInvestment = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userInvestmentId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `user_investment/${userInvestmentId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useGetUserReview = (type, investmentId, auctionId) => (
    useQuery({
        queryKey: ["useGetUserReview", type, investmentId, auctionId],
        queryFn: async ({ queryKey }) => {
            const [_, type, investmentId, auctionId] = queryKey;
            let queryParams = [];

            if (type) queryParams.push(`filter_by=${type}`);
            if (investmentId) queryParams.push(`investment_project=${investmentId}`);
            if (auctionId) queryParams.push(`auction=${auctionId}`);

            const queryString = queryParams.length > 0 ? `?${queryParams.join("&")}` : "";


            const response = await handleAPIRequest(axiosInstance.get, `user_review/${queryString}`)
            return response
        },
        staleTime: Infinity
    })
)

export const useAddUserReview = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userReviewData) => {
            const response = await handleAPIRequest(axiosInstance.post, "user_review/", userReviewData)
            return response
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteUserReview = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (userReviewId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `user_review/${userReviewId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)