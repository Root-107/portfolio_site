import Styled from "styled-components"
import { colours } from "components/globalStyles"

export const PortfolioItem = Styled.div(() => ({
    background: colours.backgroundContrastBlue,
    display: "flex",
    flexDirection: "column",
    color: colours.offWhite,
    padding: "2rem 1.75rem",
    boxShadow: `0 10px 10px -15px black`,
    h2: {
        fontSize: "22px",
        margin: "0px 0px 10px"
    },
    p:{
        fontSize: "17px"
    }
}))

export const Links = Styled.div(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    margin: "0px 0px 20px"
}))

export const MyWorkWrapper = Styled.div(props => ({
    width: "100%",
    display: "flex",
    flexDirection: "column"
}))

export const MyWorkGrid = Styled.div(props => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "15px",
    height: "100%"
}))

export const Footer = Styled.div(() => ({
    ul: {
    display: "flex",
    alignItems: "flex-end",
    flexGrow: 1,
    flexWrap: "wrap",
    padding: "0px",
    margin: "25px 0px 0px",
    listStyle: "none"
    },
    li:{
        marginRight: "10px"
    }
}))