import {Section} from "./styles"

const Header = props => {
    return <Section>
        <div>
            {props.children}
        </div>
    </Section>
}

export default Header