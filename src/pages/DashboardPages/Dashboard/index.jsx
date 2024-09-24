import React from 'react'
import IMAGES from '../../../assets/IMAGES'
import { TrendingAuction } from './Components/TrendingAuction';
import { RecentWinnersSection } from './Components/RecentWinnersSection'
import { MyBidsSection } from './Components/MyBidsSection'
import { DashboardLayout } from '../../../components/Layout/index'
import { BalanceSection } from 'components/Elements/BalanceSection';
import { useGetRecentWinners, useGetUserProfile } from 'api/UserManagement';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useGetAuction } from 'api/AuctionManagement';
import Loader from 'components/Loader';
import Spinner from 'components/Spinner';


export const Dashboard = () => {
  const { data: userProfile } = useGetUserProfile()
  const { data: recentWinners, isLoading: isLoadingRecentWinners } = useGetRecentWinners()
  const { data: auctionData, isLoading: isLoadingAuction } = useGetAuction({ page: 0 })

  const navigate = useNavigate()
  return (
    <DashboardLayout activeSidebar={"Dashboard"}>
      {isLoadingAuction ?
        <div className='w-full flex items-center justify-center min-h-[70vh]'>
          <Spinner color={"#6F9CFF"} height={100} width={100} />
        </div>
        :

        <div className='grid grid-cols-12 gap-5 '>

          <div className='col-span-12 lg:col-span-8'>
            <TrendingAuction />
          </div>
          <div className='col-span-12 lg:col-span-4 w-full'>
            <BalanceSection />
          </div>




          <div className='col-span-12 lg:col-span-7'>
            <RecentWinnersSection />
          </div>

          <div className='col-span-12 lg:col-span-5'>
            {userProfile?.active_investment ?
              <MyBidsSection />
              :
              <div className='flex flex-col gap-4 w-full h-full'>
                <h3 className='text-gray-1 lg:text-xl text-base font-poppins font-semibold'>
                  My Investments
                </h3>

                <div className='flex flex-col bg-custom-blue bg-opacity-10 h-full w-full items-center justify-center px-8 py-8 gap-4 rounded-xl md:min-h-[300px]'>
                  <h3 className='text-center  md:text-xl font-medium text-gray-2 w-[75%]'>
                    Unlock the Potential of Your Investments, activate investment services.
                  </h3>
                  <div>

                    <Button
                      onClick={() => navigate("/investments")}
                      className={"!min-w-max px-4 py-3 text-sm font-poppins font-normal rounded-xl"}
                      title={"Activate now"}
                    />
                  </div>
                </div>
              </div>
            }
          </div>


          <div className='col-span-12 lg:col-span-8 h-full bg-red-50'>
            <div className='relative cursor-pointer border rounded-lg h-full'>
              <img src={IMAGES?.mainAd} alt="" className=' h-full object-fill w-full ' />
              <h1
                className='text-lg font-normal font-poppins text-gray-1 bg-white absolute top-0 right-0 rounded-bl-xl px-4'>
                Advertisement
              </h1>
            </div>
          </div>
          <div className='w-full col-span-12 lg:col-span-4'>
            <div className=' hidden lg:block relative cursor-pointer'>
              <img src={IMAGES?.sipAd} alt="" className='object-contain hidden lg:block h-full' />
              <h1 className='text-lg font-normal font-poppins text-gray-1 bg-white absolute top-0 right-0 rounded-bl-xl px-4'>
                Advertisement
              </h1>
            </div>
          </div>
        </div>
      }

    </DashboardLayout>
  )
}
