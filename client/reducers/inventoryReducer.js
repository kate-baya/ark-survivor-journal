import { RECEIVE_INVENTORY, ADD_INVENTORY} from '../actions/index'

function inventory (state = [], action) {
  switch(action.type) {
    case RECEIVE_INVENTORY:
        return action.inventory
    
    case ADD_INVENTORY:
      let {id, item, amount} = action.inventory
      return [...state, action.inventory]
      
    default:
      return state    
  }
}

export default inventory