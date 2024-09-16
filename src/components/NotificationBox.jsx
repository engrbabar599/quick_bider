import React, { Fragment } from 'react'
import Svgs from 'assets/svgs'

function NotificationBox() {
    return (
        <div className="absolute -right-14  lg:right-0 mt-2 w-72 bg-white border border-gray-200 rounded shadow-lg z-50 p-5 flex flex-col gap-3.5">
            <div className=" ">
                <p className="text-gray-1 text-lg font-semibold font-open-sans">Notifications</p>
            </div>
            <ul className=" space-y-5">
                {Array(2).fill().map((_, index) => (
                    <Fragment key={index}>
                        <li className=" ">
                            <div className='flex flex-row gap-3.5 items-center justify-center'>
                                <Svgs.PendingNotificationIcon />
                                <p className="text-gray-1 text-sm font-open-sans">Bid 2 time has started, bid now</p>
                            </div>
                        </li>
                        <li className=" ">
                            <div className='flex flex-row gap-3.5 items-center'>
                                <Svgs.SuccessfulNotificationIcon />
                                <p className="text-gray-1 text-sm font-open-sans">Investment successfully on AB Project</p>
                            </div>
                        </li>
                    </Fragment>
                ))}
            </ul>
        </div>
    )
}

export default NotificationBox