import { Link } from "react-scroll"
import  { 
    NavagationWrapper,
    NavButton,
    Logo,
    NavButtonWrapper,
    Header
} from "./styles"

// Menu items

const menu = [
    {
        id: 1,
        route: "/",
        name: "Home",
        to: "home"
    },
    {
        id: 2,
        route: "/mywork",
        name: "Work & Skills",
        to: "work"
    },
    {
        id: 3,
        route: "/aboutme",
        name: "About Me",
        to: "about"
    }
]

const Navagation = ({visible}) => {
    return <NavagationWrapper visible={visible}>
        <NavButtonWrapper>
            <Logo src="/assets/Logo_New.png" alt="logo" />
            {menu.map(item =>
                <Link
                    to={item.to}
                    smooth={true}
                    spy={true}
                >
                    <NavButton key={item.id} item={item}>
                        {item.name}
                    </NavButton>
                </Link>
            )}
            <Header>JustBadCode</Header>
        </NavButtonWrapper>
    </NavagationWrapper>
}

export default Navagation