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
            <div className='gap-8 flex flex-col'>
                <>
                    <div className='grid lg:grid-cols-3  gap-8 w-full'>

                        {/* First Column with thr ad and Bids */}
                        <div className='flex flex-col gap-8 lg:col-span-2 items-center justify-center'>
                            <img src={IMAGES?.mainAd} alt="" className='lg:col-span-2 ' />
                            <TrendingAuction />
                        </div>

                        {/* Second Column with the chart and ad */}

                        <div className='flex flex-col gap-8 w-full justify-between items-center'>
                            <BalanceGraph />

                            <img src={IMAGES?.sipAd} alt="" className='object-contain hidden lg:block' />
                        </div>
                    </div>

                    <div className='lg:grid lg:grid-cols-7 gap-8 flex flex-col'>
                        <RecentWinnersSection />
                        <MyBidsSection />
                    </div>
                </>
                <VideoAd />
            </div>
        </>
    )
}
