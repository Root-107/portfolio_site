import { useHistory } from "react-router-dom"
import  { NavagationWrapper, NavButton, Logo, NavButtonWrapper } from "./styles"

// Menu items

const menu = [
    {
        id: 1,
        route: "/",
        name: "Home"
    },
    {
        id: 2,
        route: "/unity",
        name: "Unity"
    },
    {
        id: 3,
        route: "/3js",
        name: "3JS"
    },
    {
        id: 3,
        route: "/aboutme",
        name: "About Me"
    }
]

const Navagation = () => {
    const history = useHistory()
    return <NavagationWrapper>
        <NavButtonWrapper>
            <Logo src="/assets/Logo_New.png" alt="logo" />
            {menu.map(item =>
                <NavButton item={item}
                    onClick={() => {
                        history.push(item.route || "/")
                    }}
                >
                    {item.name}
                </NavButton>
            )}
        </NavButtonWrapper>
    </NavagationWrapper>
}

export default Navagation