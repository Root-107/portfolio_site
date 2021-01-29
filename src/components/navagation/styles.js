import Styled from "styled-components"
import { breakPoint } from "components/globalStyles"

export const NavagationWrapper = Styled.div(() => ({
    width: "100%",
    height: 60,
    backgroundColor: "#454545",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    filter: "drop-shadow(2px 0px 2px #000)",
}))

export const NavButton = Styled.div(() => ({
    margin: "0px 20px"
}))

export const NavButtonWrapper = Styled.div(() => ({
    ...breakPoint,
    width: "80%",
    height: "100%",
    display: "flex",
    alignItems: "center"
}))

export const Logo = Styled.img(() => ({
    height: "80%"
}))