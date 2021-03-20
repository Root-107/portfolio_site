export const Actions = Object.freeze({
    SET_FILTER: 1
})

export const initialState = {
    filter: "",
    logo: ""
}

export const reducer = (state, action) => {
    switch(action.type) {
        case Actions.SET_FILTER:
            return {...state, filter: action.value}
        default:
            return state
    }
}
