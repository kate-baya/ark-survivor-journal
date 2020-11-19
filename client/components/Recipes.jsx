import React from 'react'
import {Route, Link} from 'react-router-dom'
import recipes from '../data/recipes'
import {getRecipes} from '../api'
import Ingredients from './Ingredients'
import PlayerInventory from './PlayerInventory'

export default class Recipes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: []
        }
    }

    componentDidMount = () => {
        console.log(getRecipes())
        getRecipes()
        .then(recipeItems => {
            this.setState({recipes: recipeItems})
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
    }

        render() {
            return (
                <div className="container spacing">
                    <h1>Recipes 🍰</h1>
                        <div className="row">
                            <div className="one-third column border boxpad">
                                <h5>Recipes</h5>
                                <ul className='list'>
                                    {this.state.recipes.map((recipe) => <li key={recipe.id}><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></li>)}
                                </ul>
                            </div>
                            <div className="one-third column border boxpad">
                                <div className="row boxes">
                                    <h5>Recipe</h5>
                                    <Route path={`/recipes/:id`} component={Ingredients}/> 
                                </div>
                                <div className="row boxes">
                                    <h5>Player Inventory</h5>
                                    <Route path={`/recipes/:id`} component={PlayerInventory}/>
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