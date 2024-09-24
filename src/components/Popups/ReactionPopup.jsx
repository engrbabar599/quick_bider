import React, { useState } from 'react'
import Popup from '../Popup'
import { toast } from 'react-toastify'
import { Button } from '../Button'
import { useAddTestimonialReaction } from 'api/UserManagement'
import Spinner from 'components/Spinner'

function ReactionPopup({ open, closeModal, id, onSubmit, isSubmitting }) {
    const reactionsText = [
        {
            name: "Wow! that's great"
        },
        {
            name: "Awesome"
        },
        {
            name: "Wow"
        },
        {
            name: "Wonderful"
        },
        {
            name: "Amazing"
        },
    ]

    const [reactionData, setReactionData] = useState({
        id: id,
        reaction: ""
    })

    const handleSubmit = () => {

        if (!reactionData?.reaction) {
            toast.error("Please select a reaction")
            return
        }
        else {
            onSubmit({
                id: id,
                commnet_text: reactionData?.reaction
            })
        }
    }


    return (
        <Popup
            open={open}
            closeModal={closeModal}
            customWidth={"lg:w-[40vw] xl:w-[25vw]  w-[90vw] xs:w-[80vw] md:w-[50vw]"}
        >
            <div className="w-full mx-auto">
                <div className="text-center">
                    <h1 className="text-base md:text-xl font-semibold font-poppins text-gray-1">
                        Send reactions
                    </h1>
                </div>
                <div className="pt-9 px-5 flex items-center justify-center">

                    <div className="flex items-center justify-center flex-wrap gap-5">
                        {reactionsText.map((data, index) => (
                            <button
                                onClick={() => setReactionData({ ...reactionData, reaction: data?.name })}
                                key={index}
                                type='button'
                                className={`${reactionData?.reaction === data?.name ? " bg-custom-blue text-white scale-105 " : "bg-custom-blue bg-opacity-20 "} cursor-pointer rounded-full px-4 py-2 text-sm font-normal  ease-out transform duration-300 font-roboto`}>
                                {data?.name}
                            </button>
                        ))}
                    </div >
                </div >

                <div className="w-full sm:w-1/2 lg:w-1/2 mx-auto py-6">
                    <Button
                        type="button"
                        onClick={() => { handleSubmit() }}
                        className="w-full py-3 bg-custom-blue text-sm text-white font-semibold font-inter rounded-xl"
                        title={isSubmitting ? <Spinner height={20} /> : "Send reaction"}
                    />
                </div>
            </div >
        </Popup>
    )
}

export default ReactionPopup