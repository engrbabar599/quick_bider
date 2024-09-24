import { useGetBankDetails } from 'api/UserManagement';
import { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const useWalletHelper = () => {
    const data = {
        labels: [
            "Jun 12",
            "Jun 13",
            "Jun 14",
            "Jun 15",
            "Jun 16",
            "Jun 17",
            "Jun 18",
            "Jun 19",
            "Jun 20",
            "Jun 21",
        ],
        datasets: [
            {
                label: "Balance",
                data: [
                    4000, 6000, 5000, 6000, 4500, 4800, 7000, 6500, 6800, 9000, 12000,
                ],
                fill: false,
                borderColor: "#6366F1",
                tension: 0.1,
                pointBackgroundColor: "#6366F1",
                pointBorderColor: "#FFFFFF",
                pointHoverBackgroundColor: "#FFFFFF",
                pointHoverBorderColor: "#6366F1",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `$${tooltipItem.raw.toFixed(2)}`;
                    },
                },
            },
        },
        scales: {
            x: {
                display: true,
            },
            y: {
                display: true,
                beginAtZero: true,
            },
        },
    };

    const [addMoneyPopupVisible, setAddMoneyPopupVisible] = useState(false);
    const [bankDetailPage, setBankDetailPage] = useState(0)
    const [totalBankDetailPage, setTotalBankDetailPage] = useState(0)
    const [showPopup, setShowPopup] = useState(false);
    const [showWithdrawPopup, setShowWithdrawPopup] = useState(false);
    const [bankDetailsToEdit, setBankDetailsToEdit] = useState({})


    const toggleVisibility = () => {
        setAddMoneyPopupVisible(!addMoneyPopupVisible);
    };

    const toggleShow = () => {
        setShowWithdrawPopup(!showWithdrawPopup);
    };


    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const { data: bankDetails, isFetching: isLoadingBankDetails } = useGetBankDetails({
        page: bankDetailPage
    })


    useEffect(() => {
        if (bankDetails !== undefined) {
            if (bankDetails?.count < 3) {
                setTotalBankDetailPage(0)
            }
            else {
                const totalPages = Math.ceil(bankDetails?.count / 3)
                console.log("totalPages", totalPages)
                setTotalBankDetailPage(totalPages)
            }
        }
    }, [bankDetails, isLoadingBankDetails])


    return {
        data, options,
        addMoneyPopupVisible, setAddMoneyPopupVisible,
        bankDetailPage, setBankDetailPage,
        totalBankDetailPage, setTotalBankDetailPage,
        showPopup, setShowPopup,
        showWithdrawPopup, setShowWithdrawPopup,
        bankDetailsToEdit, setBankDetailsToEdit,
        // functions
        toggleVisibility, toggleShow,
        handleShowPopup, handleClosePopup,
        //  api
        bankDetails, isLoadingBankDetails,
    }
}
