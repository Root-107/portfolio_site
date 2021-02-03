import Styled from "styled-components"

export const FilterWrapper = Styled.div(() => ({
    backgroundColor: "red",
    display: "flex"
}))

export const FilterItem = Styled.div(() => ({
    backgroundColor: "grey",
    color: "white",
    margin: "10px",
    padding: "5px",
    border: "1px solid black",
    cursor: "pointer"
}))