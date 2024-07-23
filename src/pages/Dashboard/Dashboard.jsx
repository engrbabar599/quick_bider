import React from 'react'
import IMAGES from '../../assets/IMAGES'
import { TrophyIcon } from '../../assets/svgs/TrophyIcon'
import { StarIcon } from '../../assets/svgs/StarIcon'
import { Link } from 'react-router-dom'
import { OutlineButton } from '../../components/OutlineButton'
import { VideoAd } from '../../components/VideoAd';
import { TrendingAuction } from './TrendingAuction';
import { BalanceGraph } from './BalanceGraph';
import { RecentWinnersSection } from './RecentWinnersSection'
import { MyBidsSection } from './MyBidsSection'




export const Dashboard = () => {
    return (
        <>
            {/* <div className='gap-8 flex flex-col'>
                <>
                    <div className='grid lg:grid-cols-3  gap-8 w-full'>

                     
                        <div className='flex flex-col gap-8 lg:col-span-2 items-center justify-center relative'>
                            <img src={IMAGES?.mainAd} alt="" className='lg:col-span-2' />
                            <div>
                                <h1 className='text-lg font-normal font-poppins text-gray-1 bg-white absolute top-0 right-0 rounded-bl-xl px-4'>Advertisement</h1>
                            </div>
                            <TrendingAuction />
                        </div>

            

                        <div className='flex flex-col gap-8 w-full justify-between items-center'>
                            <BalanceGraph />
                            <div className=' relative'>
                            <img src={IMAGES?.sipAd} alt="" className='object-contain hidden lg:block' />
                            <div>
                                <h1 className='text-lg font-normal font-poppins text-gray-1 bg-white absolute top-0 right-0 rounded-bl-xl px-4'>Advertisement</h1>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:grid lg:grid-cols-7 gap-8 flex flex-col'>
                        <RecentWinnersSection />
                        <MyBidsSection />
                    </div>
                </>
                <VideoAd />
            </div> */}

            {/* <div className='grid grid-cols-12 gap-5'>
                <div className=' col-span-12 lg:col-span-8'>
                    <div className=' relative'>
                <img src={IMAGES?.mainAd} alt="" className='' />
                <h1 className='text-lg font-normal font-poppins text-gray-1 bg-white absolute top-0 right-0 rounded-bl-xl px-4'>Advertisement</h1>
                    </div>
                </div>
                <div className=' col-span-12 lg:col-span-4 w-full'>
                <BalanceGraph />
                </div>
                <div className=' col-span-12 lg:col-span-8'>
                <TrendingAuction />
                </div>
                <div className=' w-full col-span-12 lg:col-span-4'>
                    <div className=' relative'>
                <img src={IMAGES?.sipAd} alt="" className='object-contain hidden lg:block' />
                <h1 className='text-lg font-normal font-poppins text-gray-1 bg-white absolute top-0 right-0 rounded-bl-xl px-4'>Advertisement</h1>
                    </div>
                </div>
                <div className=' lg:col-span-7 col-span-12'>
                    <RecentWinnersSection />
                    </div>
                    <div className=' col-span-12 lg:col-span-5'>
                    <MyBidsSection />

                    </div>
            </div> */}


             <div className='grid grid-cols-12 gap-5'>
      <div className='col-span-12 lg:col-span-8'>
        <div className='relative'>
          <img src={IMAGES?.mainAd} alt="" className='' />
          <h1 className='text-lg font-normal font-poppins text-gray-1 bg-white absolute top-0 right-0 rounded-bl-xl px-4'>
            Advertisement
          </h1>
        </div>
      </div>

      <div className='col-span-12 lg:col-span-4 w-full'>
        <BalanceGraph />
      </div>

      <div className='col-span-12 lg:col-span-8'>
        <TrendingAuction />
      </div>

      <div className='w-full col-span-12 lg:col-span-4'>
        <div className='relative'>
          <img src={IMAGES?.sipAd} alt="" className='object-contain hidden lg:block' />
          <h1 className='text-lg font-normal font-poppins text-gray-1 bg-white absolute top-0 right-0 rounded-bl-xl px-4'>
            Advertisement
          </h1>
        </div>
      </div>

      <div className='col-span-12 lg:col-span-7'>
        <RecentWinnersSection />
      </div>

      <div className='col-span-12 lg:col-span-5'>
        <MyBidsSection />
      </div>
    </div>            
        </>
    )
}
