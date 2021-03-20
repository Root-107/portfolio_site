import Styled from "styled-components"

export const ParagraphContainer = Styled.div(() => ({

}))

export const ImageContainer = Styled.div(() => ({
    width: "50%"
}))

export const Image = Styled.img(() => ({
    height: "100%",
    width: "100%"
}))

export const SectionWrapper = Styled.div(() => ({
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    gap: "50px",
    width: "100%"
}))

export const Picture = Styled.div(props => ({
    width: "300px",
    height: "300px",
    backgroundImage: `url(${props.src})`,
    filter: "drop-shadow(2px 2px 5px #000)",
    backgroundPosition: "center",
    backgroundSize: "cover",
}))