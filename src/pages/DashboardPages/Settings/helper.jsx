import { useQueryClient } from '@tanstack/react-query';
import { useGetUserProfile, useUpdateUserProfile } from 'api/UserManagement';
import { useEffect, useRef, useState } from 'react'
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useSettingsHelper = () => {
    const fileInputRef = useRef(null);
    const formikRef = useRef(null)
    const [activeTab, setActiveTab] = useState("Account");
    const [previewProfileImage, setPreviewProfileImage] = useState(null)
    const queryClient = useQueryClient()

    const [notificationPreferences, setNotificationPreferences] = useState({
        notificationsEnabled: true,
        soundEnabled: true,
        sendToPhone: true,
        sendToEmail: true
    })

    const { data: userData, isFetching: isLoadingUserData } = useGetUserProfile()

    const [updatedUserData, setUpdatedUserData] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        display_pic: "",
        address: "",

    })


    const { mutate: updateProfile, isPending: isUpdating } = useUpdateUserProfile({
        onError: () => {
            toast.error("Something went wrong")
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["useGetUserProfile"] })
            toast.success("Profile update successfully")
            setPreviewProfileImage(null)
            formikRef.current.resetForm()
        }
    })

    const handleChangeUserData = (e) => {
        setUpdatedUserData({ ...updatedUserData, [e.target.name]: e.target.value })
    }

    const handleImageUpload = (e) => {
        const imageFile = e.target.files[0];
        setUpdatedUserData({ ...updatedUserData, display_pic: imageFile })

        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewProfileImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleUpdateProfile = (data) => {
        const formData = new FormData()
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key])
            }
        }
        updateProfile(formData)
    }

    useEffect(() => {
        setUpdatedUserData({
            id: userData?.id,
            first_name: userData?.first_name,
            last_name: userData?.last_name,
            phone_number: userData?.phone_number,
            email: userData?.email,
            // display_pic: userData?.display_pic
        })
    }, [userData])

    return {
        // ref
        fileInputRef,
        formikRef,
        // state
        activeTab, setActiveTab,
        notificationPreferences, setNotificationPreferences,
        updatedUserData, setUpdatedUserData,
        previewProfileImage, setPreviewProfileImage,
        // api
        userData, isLoadingUserData,
        updateProfile, isUpdating,
        // functions
        handleImageUpload,
        handleUpdateProfile,
        handleChangeUserData,
    }
}
