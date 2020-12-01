import React from 'react'
import {connect} from 'react-redux'
import {saveTame} from '../apis/dinoApi'

class AddTame extends React.Component{
    state = {
        type: '',
        name: '',
        level: 0,
        sex: '',
        health: 0,
        stamina: 0,
        food: 0,
        weight: 0,
        melee_damage: 0
    }

    handleChange = e => {
        const {name, value} = e.target
        return this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {
            type,
            name,
            level,
            sex,
            health,
            stamina,
            food,
            weight,
            melee_damage
        } = this.state
        saveTame(this.state, this.props.dispatch)
    }
    
    render () {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Type:
            <input type="text" name="type" value={this.state.type} onChange={this.handleChange}/>
            </label>
            <label>
                Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </label>
            <label>
               Level:
            <input type="text" name="level" value={this.state.level} onChange={this.handleChange}/>
            </label>
            <label>
                Sex:
            <input type="text" name="sex" value={this.state.sex} onChange={this.handleChange}/>
            </label>
            <label>
                Health:
            <input type="text" name="health" value={this.state.health} onChange={this.handleChange}/>
            </label>
            <label>
                Stamina:
            <input type="text" name="stamina" value={this.state.stamina} onChange={this.handleChange}/>
            </label>
            <label>
                Food:
            <input type="text" name="food" value={this.state.food} onChange={this.handleChange}/>
            </label>
            <label>
                Weight:
            <input type="text" name="weight" value={this.state.weight} onChange={this.handleChange}/>
            </label>
            <label>
                Melee Damage:
            <input type="text" name="melee_damage" value={this.state.melee_damage} onChange={this.handleChange}/>
            </label>
            <input type ="submit" value="Submit"></input>
        </form>
    )
    }
}

export default connect()(AddTame)