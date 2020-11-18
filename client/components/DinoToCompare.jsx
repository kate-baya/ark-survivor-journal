import React from 'react'
import secondDino from '../data/dinos'

function DinoToCompare (props) {
    const dino = secondDino.find(dino => {
        return dino.id2 == props.match.params.id2
    })
    console.log(props)
    return (
        <div>
            <h5>{dino.name}</h5>
            <p>Level: {dino.level}</p>
            <p>Type: {dino.type}</p>
            <p>Sex: {dino.sex}</p>
            <div>
                {dino.stats.map((stat, key) => {
                    return <p key={key}>{stat.statType}: {stat.points}</p>
                })}
            </div>
        </div>
    )
}

export default DinoToCompare

