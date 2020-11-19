import React from 'react'
import secondDino from '../data/dinos'

function DinoToCompare (props) {
    const dino = secondDino.find(dino => {
        return dino.id == props.match.params.id2
    })
    console.log(props)
    return (
        <div className='toCompare'>
            <h6 className='bigger'>Name: {dino.name}</h6>
            <p>{dino.level}: Level</p>
            <p>{dino.type}: Type</p>
            <p>{dino.sex}: Sex</p>
            <div>
                {dino.stats.map((stat, key) => {
                    return <p key={key}>{stat.points}: {stat.statType}</p>
                })}
            </div>
        </div>
    )
}

export default DinoToCompare

