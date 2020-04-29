// {
//     type: // the action type for this reducer
//     payload: // could be an object we might pass to set as state or use to modify state
// }
// state is the current state when this is fired
const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}
export default userReducer;