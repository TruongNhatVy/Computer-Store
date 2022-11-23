import ACTIONS from '../actions/'

const accounts = []

const accountsReducer = (state = accounts, action) => {
    switch(action.type){
        case ACTIONS.GET_ALL_USERS:
            return action.payload
        default:
            return state
    }
}

export default accountsReducer