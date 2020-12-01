import { combineReducers } from 'redux'

import dinos from './dinoReducer'
import inventory from './inventoryReducer'
import crafting from './craftingReducer'
import recipes from './recipeReducer'

export default combineReducers({
    dinos,
    inventory,
    crafting,
    recipes
})