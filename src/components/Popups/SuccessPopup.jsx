import { Button } from 'components/Button';
import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal';

function SuccessPopup({ open, closeModal, secondaryText, successText, onButtonClick, buttonText }) {
    const [width, setWidth] = useState(''); // State to store the calculated width

    useEffect(() => {
        const handleResize = () => {
            // Set the modal width based on window width (e.g., 80% of window width)
            const calculatedWidth = `${window.innerWidth}`; // Example: 80% of window width
            setWidth(calculatedWidth);
        };

        handleResize(); // Set initial width based on the current window width
        window.addEventListener('resize', handleResize); // Update on window resize

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const rootElement = document.getElementById('root')
        if (open) {
            rootElement.classList.add('overflow-hidden');
            rootElement.classList.add('h-[100vh]');
        }
        else {
            rootElement.classList.remove("overflow-hidden")
            rootElement.classList.remove('h-[100vh]');
        }
        return (() => {
            rootElement.classList.remove("overflow-hidden")
            rootElement.classList.remove("h-[100vh]")
        })
    }, [open])

    return (
        <ReactModal
            isOpen={open}
            shouldCloseOnOverlayClick={true}
            onRequestClose={closeModal}
            style={{
                content: {
                    width:
                        width > 1200 ? "25vw" :
                            width > 700 ? "40vw" :
                                width > 400 ? "80vw"
                                    : "90vw", // Dynamically set width based on window width
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: "12px"
                }
            }}
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75">

            <div className='w-full text-center'>

                <div className="flex justify-center items-center mb-4">
                    <span className="material-icons bg-green-500 text-white w-10 h-10 rounded-full flex justify-center items-center">
                        check
                    </span>
                </div>
                <div className="w-3/4 mx-auto">
                    <h1 className="text-base font-medium font-poppins text-gray-700 mb-2">
                        {successText}
                    </h1>


                    {secondaryText &&
                        <h3 className='font-poppins font-normal text-gray-4 text-sm whitespace-pre-wrap'>
                            {secondaryText}
                        </h3>
                    }

                </div>
                <div className="flex items-center justify-center py-2 min-w-max">
                    <Button
                        onClick={onButtonClick ? onButtonClick : closeModal}
                        title={buttonText}
                        customWidth={"min-w-max"}
                        customPadding={"px-[59px] py-3"}
                        className=" rounded-xl  text-sm " />
                </div>
            </div>

        </ReactModal >
    )
}

export default SuccessPopup