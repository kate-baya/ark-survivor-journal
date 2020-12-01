import React from 'react'
import {connect} from 'react-redux'

class ChosenDino extends React.Component {

    findDino () { 
        return this.props.dinos.find(dino => {
        return dino.id == this.props.match.params.id
        })
    }

    render () {
        const dino = this.findDino()
        return (
            <div className='chosenTame'>
                <h6 className='bigger'>Name: {dino.name}</h6>
                <p>Level: {dino.level}</p>
                <p>Type: {dino.type}</p>
                <p>Sex: {dino.sex}</p>
                <p>Health: {dino.health}</p>
                <p>Stamina: {dino.stamina}</p>
                <p>Food: {dino.food}</p>
                <p>Weight: {dino.weight}</p>
                <p>Melee Damage: {dino.melee_damage}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dinos: state.dinos
    }
}

export default connect(mapStateToProps)(ChosenDino)