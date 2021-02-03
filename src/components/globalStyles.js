import Styled, { createGlobalStyle } from "styled-components"

export const breakPoint = {
    maxWidth: "1500px",
    minWidth: "600px"
}

const windowSizes = {
    width: "100%",
    height: "100%",
}

export const PageWrapper = Styled.div(() => ({
    ...breakPoint,
    width: "80%",
    margin: "0 auto",
    padding: "50px 0"
}))

export const GlobalHeader = Styled.h1(() => ({
    color: "white"
}))

const GlobalSyles = createGlobalStyle(() => (
    {
        "*":{
            border: "0px",
            margin: "0px",
        },
        body:{
            backgroundColor: "#1d3845"
        },
        "#root": {
            ...windowSizes,
        }
    }
))

export default GlobalSyles