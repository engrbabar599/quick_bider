import axios from "axios";
import { useNavigate } from "react-router-dom";

export const axiosInstance = axios.create({ baseURL: "https://api.quickbider.com/v1/api/" })

axiosInstance.interceptors.request.use((config) => {
    try {
        if (config.url.includes("/register") || config.url.includes("/verify_email")) {
            return config;
        }
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = "token " + token
        }
        return config
    }
    catch (err) {
        console.log(err)
    }
})

export const handleAPIRequest = async (requestFunc, endpoint, requestData) => {
    try {
        const { data } = await requestFunc(endpoint, requestData);
        console.log(`Request to ${endpoint} successful:`, data);
        return data;
    } catch (error) {

        const statusCode = error?.response?.status; // Get the status code from the response
        const errorMessage = error?.response?.data?.message || error.message || "Unknown error";

        console.error(`Error in API request to ${endpoint}:`, errorMessage);

        if (statusCode === 401) {
            console.log('Unauthorized. Redirecting to login...');
            navigate('/login'); // Redirect to login page if status is 401
        }

        throw error; // Throw the entire error object for better debugging

        // const errorMessage = error || error.message || "Unknown error";
        // console.error(`Error in API request to ${endpoint}:`, errorMessage);
        // throw error; // Throw the entire error object for better debugging
    }
};