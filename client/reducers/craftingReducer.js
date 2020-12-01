import {RECEIVE_CRAFTING} from '../actions/index'

function crafting (state = [], action) {
  switch(action.type) {
    case RECEIVE_CRAFTING:
      return action.crafting

    default:
      return state  
  }
}

export default crafting