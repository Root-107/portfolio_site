import Styled from "styled-components"
import { colours } from "components/globalStyles"

export const Banner = Styled.div(() => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "600px",
    height: "100vh",
    color: "white",
    h1:{
        fontSize: "clamp(40px, 8vw, 80px)"
    },
    h2:{
        fontSize: "clamp(40px, 8vw, 80px)",
        color: colours.offWhite
    }
}))