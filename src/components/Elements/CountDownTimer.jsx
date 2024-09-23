import { useEffect, useState } from "react";

export const CountDownTimer = ({ timeStamp }) => {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [targetTime, setTargetTime] = useState(new Date(timeStamp))

    useEffect(() => {
        if (!targetTime) return;

        const timerId = setInterval(() => {
            setTime(prevTime => {
                const now = new Date();
                const timeDiff = targetTime - now;
                console.log(timeDiff)

                if (timeDiff <= 0) {
                    clearInterval(timerId);
                    return { hours: 0, minutes: 0, seconds: 0 };
                }

                const hours = Math.floor(timeDiff / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [targetTime]);



    return (
        <>
            {time?.hours != 0 && time?.minutes != 0 && time?.seconds != 0 &&
                // <h1 className='text-xs font-semibold font-poppins text-gray-1 bg-white absolute rounded-xl px-2 h-[36px] w-[100px] flex items-center justify-center top-5 right-5 text-center min-w-max'>
                //     Auction Over
                // </h1>
                // :
                <h1 className='text-xs font-semibold font-poppins text-gray-1 bg-white absolute rounded-xl px-2 h-[36px] w-[100px] flex items-center justify-center top-5 right-5 text-center min-w-max'>{time.hours}h : {time.minutes}m : {time.seconds}s</h1>
            }
        </>
    )
}