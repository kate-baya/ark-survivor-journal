import React from 'react'
import {connect} from 'react-redux'
import { deleteTame } from '../apis/dinoApi'

class ChosenDino extends React.Component {

    findDino () { 
        return this.props.dinos.find(dino => {
        return dino.id == this.props.match.params.id
        })
    }

    

    render () {
        const dino = this.findDino()

        const clickHandler = (e) => {
            console.log("line 19")
            deleteTame(dino.id, this.props.dispatch)
            console.log(this.props)
        }

        const update = () => {

        }

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
                <button onClick={clickHandler}>Delete</button>
                <button onClick={this.update}>Update</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        dinos: state.dinos
    }
}

export default connect(mapStateToProps)(ChosenDino)