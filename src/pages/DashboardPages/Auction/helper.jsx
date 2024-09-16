import { useGetAuction } from 'api/AuctionManagement'
import { useNavigate } from 'react-router-dom'

export const useAuctionHelper = () => {
    const navigate = useNavigate()
    const { data: auctionData, isLoading: isLoadingAuction } = useGetAuction()

    return {
        navigate, auctionData, isLoadingAuction
    }
}
