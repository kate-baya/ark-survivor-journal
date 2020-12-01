import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getRecipes} from '../apis/recipesApi'
import {receiveRecipes} from '../actions/index'
import Ingredients from './Ingredients'
import PlayerInventory from './PlayerInventory'

class Recipes extends React.Component {

    componentDidMount = () => {
        getRecipes()
        .then(recipe => {
            this.props.dispatch(receiveRecipes(recipe))
        })
        .catch(err => {
            console.log(err)
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
                                    {this.props.recipes.map((recipe) => <li key={recipe.id}><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></li>)}
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

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(Recipes)