/**
 * @name AppContext
 */

import { createContext, useReducer } from "react"
import { reducer, initialState } from "./ContextVariables"

const AppContext = createContext()

AppContext.Provider = (Provider => props => {

    // How to optimise example
    // const map = new Map()

    // useEffect(() => {
    //     var start = window.performance.now();
    //     console.log(fib(50))
    //     var end = window.performance.now();
    //     console.log(`Execution  time: ${end - start} ms`)
    // },[])

    // const fib = n => {
    //     if(n <= 2) return 1;
    //     if(map.has(n)) {
    //         return map.get(n)
    //     } 

    //     const val = fib(n - 1) + fib(n - 2)
    //     map.set(n, val)
    //     return val
    // }

    const { children } = props || {}
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Provider value={{...state, dispatch}}>{children}</Provider>
})(AppContext.Provider)

export default AppContext