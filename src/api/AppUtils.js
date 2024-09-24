import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance, handleAPIRequest } from "./axiosInstance";

export const useGetCity = () => (
    useQuery({
        queryKey: ["useGetCity"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "city/")
            return response
        },
        staleTime: Infinity
    })
)

export const useAddCity = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (cityData) => {
            const response = await handleAPIRequest(axiosInstance.post, "city/", cityData)
            return response
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useGetProvince = () => (
    useQuery({
        queryKey: ["useGetProvince"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "province/")
            return response
        },
        staleTime: Infinity
    })
)

export const useAddProvince = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (provinceData) => {
            const response = await handleAPIRequest(axiosInstance.post, "province/", provinceData)
            return response
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useGetReaction = () => (
    useQuery({
        queryKey: ["useGetReaction"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "reaction/")
            return response
        },
        staleTime: Infinity
    })
)

export const useAddReaction = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (reactionData) => {
            const response = await handleAPIRequest(axiosInstance.post, "reaction/", reactionData)
            return response
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useGetGeneral = () => (
    useQuery({
        queryKey: ["useGetGeneral"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "general/")
            return response
        },
        staleTime: Infinity
    })
)

export const useAddGeneral = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (generalData) => {
            const response = await handleAPIRequest(axiosInstance.post, "general/", generalData)
            return response
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteGeneral = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (generalId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `general/${generalId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useGetProjectStat = () => (
    useQuery({
        queryKey: ["useGetProjectStat"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "project_stat/2/")
            return response
        },
        staleTime: Infinity
    })
)

export const useAddProjectStat = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (projectStatData) => {
            const response = await handleAPIRequest(axiosInstance.post, "project_stat/", projectStatData)
            return response
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useDeleteProjectStat = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (projectStatId) => {
            const response = await handleAPIRequest(axiosInstance.delete, `project_stat/${projectStatId}/`)
            return response;
        },
        onError: onError,
        onSuccess: onSuccess
    })
)

export const useGetContactUs = () => (
    useQuery({
        queryKey: ["useGetContactUs"],
        queryFn: async () => {
            const response = await handleAPIRequest(axiosInstance.get, "contact_us/")
            return response
        },
        staleTime: Infinity
    })
)

export const useAddContactUs = ({ onError, onSuccess }) => (
    useMutation({
        mutationFn: async (contactData) => {
            const response = await handleAPIRequest(axiosInstance.post, "contact_us/", contactData)
            return response
        },
        onError: onError,
        onSuccess: onSuccess
    })
)



