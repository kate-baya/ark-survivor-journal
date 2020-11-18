import React from 'react'
import crafting from '../data/crafting'
import CraftingIngredients from './CraftingIngredients'
import PlayerInventory from './PlayerInventory'
import {Link, Route} from 'react-router-dom'

export default class Crafting extends React.Component {
        render() {
            console.log(this.props)
            return (
                <div className="container">
                    <h1>Crafting</h1>
                        <div className="row">
                            <div className="one-third column border">
                                <p>Crafting navigation</p>
                                    <ul>
                                        {crafting.map((item, id) => {
                                            return <li key={id}><Link to={`/crafting/${item.id}`}>{item.name}</Link></li>
                                        })}
                                    </ul>
                            </div>
                            <div className="one-third column border">
                                <div className="row">
                                    <p>Items needed</p>
                                    <Route path={`/crafting/:id`} component={CraftingIngredients} />
                                </div>
                                <div className="row">
                                    <p>Current inventory of needed items</p>
                                    <Route path={`/crafting/:id`} component={PlayerInventory} />
                                </div>
                            </div>
                            <div className="one-third column border">
                                <p>Additional items needed and where to source them</p>
                            </div>
                        </div>
                </div>
            )
        }
}