import React from 'react'
import crafting from '../data/crafting'
import CraftingIngredients from './CraftingIngredients'
import PlayerInventory from './PlayerInventory'
import {Link, Route} from 'react-router-dom'
import {getCrafting} from '../api'

export default class Crafting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            crafting: []
        }
    }

    componentDidMount = () => {
        getCrafting()
        .then(craftingItems => {
            console.log(craftingItems)
            this.setState({crafting: craftingItems})
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
    }

  
    render() {
        {console.log(this.state)}
        return (
            <div className="container spacing">
                <h1>Crafting 🪚</h1>
                    <div className="row">
                        <div className="one-third column border boxpad">
                            <h5>Items to Craft</h5>
                                <ul className="list">
                                    {this.state.crafting.map((item, id) => {
                                        return <li key={id}><Link to={`/crafting/${item.id}`}>{item.name}</Link></li>
                                    })}
                                </ul>
                        </div>
                        <div className="one-third column border boxpad">
                            <div className="row">
                                <h5>Crafting Recipe</h5>
                                <Route path={`/crafting/:id`} component={CraftingIngredients} />
                            </div>
                            <div className="row">
                                <h5>Player Inventory</h5>
                                <Route path={`/crafting/:id`} component={PlayerInventory} />
                            </div>
                        </div>
                        <div className="one-third column border boxpad">
                            <h5>Items Needed</h5>
                        </div>
                    </div>
            </div>
        )
    }
}