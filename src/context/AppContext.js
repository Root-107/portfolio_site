/**
 * @name AppContext
 */

import { createContext, useReducer } from "react"
import { reducer, initialState } from "./ContextVariables"

const AppContext = createContext()

AppContext.Provider = (Provider => props => {
    const { children } = props || {}
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Provider value={{...state, dispatch}}>{children}</Provider>
})(AppContext.Provider)

export default AppContext