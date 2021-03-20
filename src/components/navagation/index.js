import { useHistory } from "react-router-dom"
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
        name: "Home"
    },
    {
        id: 2,
        route: "/mywork",
        name: "Work & Skills"
    },
    {
        id: 3,
        route: "/aboutme",
        name: "About Me"
    }
]

const Navagation = ({visible}) => {
    const history = useHistory()
    return <NavagationWrapper visible={visible}>
        <NavButtonWrapper>
            <Logo src="/assets/Logo_New.png" alt="logo" />
            {menu.map(item =>
                <NavButton key={item.id} item={item}
                    onClick={() => {
                        history.push(item.route || "/")
                    }}
                >
                    {item.name}
                </NavButton>
            )}
            <Header>JustBadCode</Header>
        </NavButtonWrapper>
    </NavagationWrapper>
}

export default Navagation