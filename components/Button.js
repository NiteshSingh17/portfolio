import React from 'react'

export default function Button(props) {
    

    return (
        <button className={"bg-orange-600 px-4 py-2 rounded-lg text-white " + ( props.className ? props.className : '' )  }>
            {props.children}
        </button>
    )
}
