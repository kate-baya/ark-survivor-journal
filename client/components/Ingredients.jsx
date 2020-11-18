import React from 'react'
import recipes from '../data/recipes'

function Ingredients (props) {

    let recipe = recipes.find(recipe => {
        return recipe.id == props.match.params.id
    })

    return (
    <div>
        <ul>{recipe && recipe.ingredients.map((obj, key) => {
        return <li key={key}>{obj.resource} {obj.amount}</li>
    })}
     </ul>
     </div>
    )
}

export default Ingredients