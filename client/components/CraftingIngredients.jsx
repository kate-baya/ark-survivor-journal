import React from 'react'
import crafting from '../data/crafting'

export default function CraftingIngredients (props) {
    const item = crafting.find(item => {
        return item.id == props.match.params.id
    })

    return (
        <div>
            <ul className="list">
            {item.ingredients.map((ingredients, id) => {
                return <li key={id}>{ingredients.resource} {ingredients.amount}</li>
            })}
            </ul>
        </div>
    )
}