import React from 'react'

export default class AddDino extends React.Component{
    render () {
    return (
        <form>
            <label>
                Type:
            <input type="text" name="type" value={this.state.dino.type} />
            </label>
            <label>
                Name:
            <input type="text" name="name" value={this.state.dino.name} />
            </label>
            <label>
               Level:
            <input type="text" name="level" value={this.state.dino.level} />
            </label>
            <label>
                Sex:
            <input type="text" name="sex" value={this.state.dino.sex} />
            </label>
            <label>
                Health:
            <input type="text" name="health" value={this.state.dino.stats.health} />
            </label>
            <label>
                Stamina:
            <input type="text" name="stamina" value={this.state.dino.stats.stamina} />
            </label>
            <label>
                Food:
            <input type="text" name="food" value={this.state.dino.stats.food} />
            </label>
            <label>
                Weight:
            <input type="text" name="weight" value={this.state.dino.stats.weight} />
            </label>
            <label>
                Melee Damage:
            <input type="text" name="meleeDamage" value={this.state.dino.state.meleeDamaga} />
            </label>
            <input type ="submit" value="Submit"></input>
        </form>
    )
    }
}