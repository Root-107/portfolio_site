import Styled from "styled-components"
import { breakPoint, colours } from "components/globalStyles"

const menuHeight = 60

export const NavagationWrapper = Styled.div(({visible}) => ({
    width: "100%",
    height: menuHeight,
    backgroundColor: colours.darkGrey,
    display: "flex",
    transition: "top 0.3s",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    filter: "drop-shadow(2px 0px 2px #000)",
    position: "fixed",
    top: visible? 0 : `-${menuHeight}px`,
    overflow: "hidden",
    zIndex: 10
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

export const Header = Styled.h2(() => ({
    margin: "auto 0 auto auto"
}))