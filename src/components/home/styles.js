import Styled from "styled-components"

export const Picture = Styled.div(props => ({
    borderRadius: "50%",
    width: "300px",
    height: "300px",
    backgroundImage: `url(${props.src})`,
    filter: "drop-shadow(2px 2px 5px #000)",
    backgroundPosition: "center",
    backgroundSize: "cover"
}))