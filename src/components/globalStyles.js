import { createGlobalStyle } from "styled-components"

export const breakPoint = {
    maxWidth: "1500px",
    minWidth: "600px"
}
const windowSizes = {
    width: "100%",
    height: "100%",
}

const GlobalSyles = createGlobalStyle(() => (
    {
        "*":{
            border: "0px",
            margin: "0px",
        },
        "#root": {
            ...windowSizes,
        }
    }
))

export default GlobalSyles