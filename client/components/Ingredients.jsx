import React from 'react'
import recipes from '../data/recipes'

export default function Ingredients (props) {

    const recipe = recipes.find(recipe => {
        return recipe.id == props.match.params.id
    })
  
        return (
        <div>
            <ul className="list">
            {recipe.ingredients.map((obj, key) => {
                return <li key={key}>{obj.resource} {obj.amount}</li>
            })}
            </ul>
        </div>
        )
     
}
