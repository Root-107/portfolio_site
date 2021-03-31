import Styled, { createGlobalStyle } from "styled-components"

export const breakPoint = {
    maxWidth: "1000px",
    minWidth: "0px"
}

const windowSizes = {
    width: "100%",
    height: "100%",
}

export const PageWrapper = Styled.div(() => ({
    ...breakPoint,
    width: "80%",
    margin: "0 auto",
    padding: "100px 0"
}))

export const GlobalHeader = Styled.h1(() => ({
    color: colours.offWhite
}))

export const GlobalButton = Styled.button (() => ({
    color: "white",
    backgroundColor: "Transparent",
    margin: "10px auto 0px",
    border: "1px solid white",
    cursor: "pointer",
    borderRadius: "4px",
    padding: "1.3rem 1.8rem",
}))

export const colours = {
    offWhite: "#D2D7DA",
    lightBlue: "#0094CF",
    midBlue: "#006B91",
    darkBlue: "#1D3744",
    backgroundContrastBlue: "#254859",
    darkGrey: "#454545",
    lightSlateBlue: "#ccd6f6",
}

const GlobalSyles = createGlobalStyle(() => (
    {
        "*":{
            border: "0px",
            margin: "0px",
            fontFamily: "Calibre,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif"
        },
        body:{
            backgroundColor: "#1d3845"
        },
        "#root": {
            ...windowSizes,
        },
        p:{
            color: colours.offWhite
        }
    }
))

export default GlobalSyles