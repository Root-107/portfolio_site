import PropTypes from "prop-types"
import AppContext from "context/AppContext"
import { useContext, useState} from "react"
import Item from "./item"
import { MyWorkWrapper, MyWorkGrid } from "./styles"
import { GlobalButton } from "components/globalStyles"

const workCount = {
    max: 10,
    min: 6
}

const Work = props => {
    const { items } = props
    const { filter } = useContext(AppContext)
    const [showMore, setShowMore] = useState(workCount.min)

    return <MyWorkWrapper>
        <MyWorkGrid>
            {items.map((item, i) => (filter === "" || item.filters.includes(filter)) && i < showMore?
                <Item item={item} />
            : null )}
        </MyWorkGrid>
    <GlobalButton onClick={() => {
        setShowMore(showMore === workCount.min? workCount.max : workCount.min)
    }}>
        {`Show ${showMore === workCount.min? "More" : "Less"}`}
    </GlobalButton>
    </MyWorkWrapper>
}

Work.defaultProps = {
    items: []
}

Work.propTypes = {
    items: PropTypes.array
}

export default Work