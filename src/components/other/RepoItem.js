import React from 'react'

import stars from '../../res/star.png'
import forks from '../../res/fork.png'

export default function RepoItem(props) {
    return (
        <li className='repo-item-container'>
            <h3>{props.repo.name}</h3>
            <p>{props.repo.desc}</p>
            <div className='repos-lower-container'>
            <p>{props.repo.lang}</p>
            <img src={stars} alt='stars' />
            <p>{props.repo.stars}</p>
            <img src={forks} alt='forks' />
            <p>{props.repo.forks}</p>
            </div>
        </li>
    )
}
