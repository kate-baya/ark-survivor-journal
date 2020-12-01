import {RECEIVE_DINOS, ADD_TAME} from '../actions/index'

function dinos (state = [], action) {
    switch(action.type) {
        case RECEIVE_DINOS:
            return action.dinos
        
        case ADD_TAME:
            let {id, type, name, level, sex, stat_id} = action.tame
            return [...state, action.tame]
        
        default: 
            return state
    }
}

export default dinos