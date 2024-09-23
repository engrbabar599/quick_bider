import React from 'react'
import { ClipLoader, MoonLoader } from 'react-spinners'

export default function Loader() {
    return (
        <ClipLoader
            color='#6F9CFF'
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={0.5}
        />
    )
}
