import React from 'react'
import { connect } from 'react-redux'

class DinoToCompare extends React.Component {

    findDino () {
        return this.props.dinos.find(dino => {
        return dino.id == this.props.match.params.id2
        })
    }

    render () {
        const dino = this.findDino()
        return (
            <div className='toCompare'>
                <h6 className='bigger'>Name: {dino.name}</h6>
                <p>{dino.level}: Level</p>
                <p>{dino.type}: Type</p>
                <p>{dino.sex}: Sex</p>
                <p>{dino.health}: Health</p>
                <p>{dino.stamina}: Stamina</p>
                <p>{dino.food}: Food</p>
                <p>{dino.weight}: Weight</p>
                <p>{dino.melee_damage}: Melee Damage</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dinos: state.dinos
    }
}

export default connect(mapStateToProps)(DinoToCompare)

