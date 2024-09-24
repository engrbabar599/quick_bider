import React, { useEffect } from 'react'
import ReactModal from 'react-modal'

function Popup({ open, children, closeModal, customWidth, customPadding }) {
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
            // style={{
            //     content: {
            //         //         // width: customWidth ? customWidth : "",
            //         //         // top: '50%',
            //         //         // left: '50%',
            //         //         // right: 'auto',
            //         //         // bottom: 'auto',
            //         //         // marginRight: '-50%',
            //         //         // transform: 'translate(-50%, -50%)',
            //         //         borderRadius: "12px",
            //         //         overflowY: "auto",
            //         //         maxHeight: "90vh"
            //     }
            // }}
            overlayClassName="flex items-center justify-center h-screen w-screen absolute inset-0 bg-gray-500 bg-opacity-75 "
            className={`${customWidth ? customWidth : "w-[70vw]"}
            ${customPadding ? customPadding : 'p-4'}
            bg-white max-h-[90vh] rounded-xl outline-none overflow-y-auto`}

        >
            {children}
        </ReactModal>
    )
}

export default Popup