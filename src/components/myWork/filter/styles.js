import Styled from "styled-components"

export const FilterWrapper = Styled.div(() => ({
    display: "flex",
    flexWrap: "wrap"
}))

export const FilterItem = Styled.button(() => ({
    color: "white",
    backgroundColor: "Transparent",
    margin: "10px",
    border: "1px solid white",
    cursor: "pointer",
    borderRadius: "4px",
    padding: ".5rem 1rem"
}))