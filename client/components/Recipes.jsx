import React from 'react'
import {Route, Link} from 'react-router-dom'
import recipes from '../data/recipes'
import Ingredients from './Ingredients'
import PlayerInventory from './PlayerInventory'

export default class Recipes extends React.Component {
        render(props) {
            return (
                <div className="container">
                    <h1>Recipes</h1>
                        <div className="row">
                            <div className="one-third column border">
                                <p>Recipe navigation</p>
                                <ul>
                                    {recipes.map((recipe) => <li key={recipe.id}><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></li>)}
                                </ul>
                            </div>
                            <div className="one-third column border">
                                <div className="row">
                                    <p>Recipe</p>
                                    <Route path={`/recipes/:id`} component={Ingredients}/> 
                                </div>
                                <div className="row">
                                    <p>Player Inventory</p>
                                    <Route path={`/recipes/:id`} component={PlayerInventory}/>
                                </div>
                            </div>
                            <div className="one-third column border">
                                <p>Items needed and where to source them</p>
                            </div>
                        </div>
                </div>
            )
        }
}