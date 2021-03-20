import { GlobalHeader } from "components/globalStyles"
import { HeaderWrapper } from "./styles"

const Header = ({content}) => {
    return <HeaderWrapper>
        <GlobalHeader>
            {content}
        </GlobalHeader>
    </HeaderWrapper>
}

export default Header