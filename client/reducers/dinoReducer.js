import {RECEIVE_DINOS} from '../actions/index'

function dinos (state = [], action) {
    switch(action.type) {
        case RECEIVE_DINOS:
            return action.dinos
        
        default: 
            return state
    }
}

export default dinos