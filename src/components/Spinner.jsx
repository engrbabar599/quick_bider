import React from 'react'
import { Oval } from 'react-loader-spinner'

function Spinner({ width, height, isVisible, color }) {
    return (
        <Oval
            visible={isVisible}
            height={height ? height : "25"}
            width={width ? width : "30"}
            color={color ? color : "white"}
            secondaryColor=''
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            strokeWidth={6}
            wrapperClass="flex items-center justify-center"
        />
    )
}

export default Spinner