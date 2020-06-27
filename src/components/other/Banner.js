import React from 'react'

export default function Banner(props) {
    return (
        <div className='banner-container'>
            <p>{props.name}</p>
            <p>See what the GitHub community is most excited about today.</p>
        </div>
    )
}
