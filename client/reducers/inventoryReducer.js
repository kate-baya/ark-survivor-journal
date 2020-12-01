import { RECEIVE_INVENTORY} from '../actions/index'

function inventory (state = [], action) {
  switch(action.type) {
    case RECEIVE_INVENTORY:
        return action.inventory
     
    default:
      return state    
  }
}

export default inventory