import React from 'react'
// import playerInventory from '../data/playerInventory'
import recipes from '../data/recipes'
import {getInventory} from '../api'

export default class PlayerInventory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inventory: []
        }
    }

    componentDidMount () {
        getInventory()
            .then(items => {
                this.setState({inventory: items})
            })
            .catch(err => {
                res.status(500).send(err.message)
            })
    }
    
        recipe = recipes.find(recipe => {
            return recipe.id == this.props.match.params.id
        })

        render () {
        return (
            <div>
                <ul className="list">
                    {this.recipe && this.state.inventory.map((item, id) => {
                        return <li key={id}>{item.item} {item.amount}</li>
                    })}
                </ul>
                
            </div>
        )
    }
}