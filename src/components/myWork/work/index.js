import PropTypes from "prop-types"
import AppContext from "context/AppContext"
import { useContext} from "react"
import Item from "./item"
import { MyWorkWrapper, MyWorkGrid } from "./styles"
import { GlobalButton } from "components/globalStyles"

const Work = props => {
    const { items } = props
    const { filter } = useContext(AppContext)

    return <MyWorkWrapper>
        <MyWorkGrid>
            {items.map(item => (filter === "" || item.filters.includes(filter))?
                <Item item={item} />
            : null )}
        </MyWorkGrid>
    <GlobalButton>Show More</GlobalButton>
    </MyWorkWrapper>
}

Work.defaultProps = {
    items: []
}

Work.propTypes = {
    items: PropTypes.array
}

export default Work