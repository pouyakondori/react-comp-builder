const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            const {payload: {modalId}} = action
            state= {...state, [modalId]: !state[modalId]}
    }
    console.log(state)
    return state
}
export default reducer;