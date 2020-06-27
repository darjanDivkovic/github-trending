import React from 'react'

import Banner from '../other/Banner'
import Repos from '../other/Repos';

export default function Explore(props) {
    return (
        <div>
            <Banner name='Trending' />
            <Repos search={props.search}/>
        </div>
    )
}

