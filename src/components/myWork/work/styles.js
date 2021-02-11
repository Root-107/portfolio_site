import Styled from "styled-components"
import { relative } from "upath"

export const PortfolioItem = Styled.div(() => ({
    cursor: "pointer",
    background: "#666",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    position:"relative"
}))

export const MyWorkWrapper = Styled.div(props => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
    gridGap: "1rem",
}))

export const ThumbImage = Styled.img(() => ({
    width: "100%"
}))

export const GitHub = Styled.div(() => ({
    cursor: "pointer",
    backgroundColor: "#111",
    borderRadius: "50px",
    border: "solid 3px #111",
    width: "50px",
    height: "50px",
    position: "absolute",
    backgroundImage: `url("/assets/GitHub-Mark-Light-120px-plus.png")`,
    backgroundSize: "contain",
    right: "10px",
    bottom: "10px"
}))

export const Title = Styled.div(() => ({
    position:"absolute",
    width: "100%",
    backgroundColor: "#777",
    bottom: "0px",
    paddingLeft: "20px"
}))