/**
 * @name AppContext
 */

import { createContext, useReducer, useEffect } from "react"
import { reducer, initialState } from "./ContextVariables"

const AppContext = createContext()

const map = new Map()

export const fib = n => {
    if(n <= 2) return 1;
    if(map.has(n)) {
        return map.get(n)
    } 

    const val = fib(n - 1) + fib(n - 2)
    map.set(n, val)
    return val
}

AppContext.Provider = (Provider => props => {

    useEffect(() => {
        var start = window.performance.now();
        console.log(fib(50))
        var end = window.performance.now();
        console.log(`Execution  time for fib(50): ${end - start} ms`)
    },[])

    const { children } = props || {}
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Provider value={{...state, dispatch}}>{children}</Provider>
})(AppContext.Provider)

export default AppContext