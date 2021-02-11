import PropTypes from "prop-types"
import AppContext from "context/AppContext"
import { useContext} from "react"
import {
    PortfolioItem,
    MyWorkWrapper,
    ThumbImage,
    GitHub,
    Title
} from "./styles"

const Work = props => {
    const { items } = props
    const { filter } = useContext(AppContext)

    return <MyWorkWrapper>
        {items.map(item => (filter === "" || item.filters.includes(filter))?
            <PortfolioItem key={item.id} onClick={() => {
                if(item.asset?.url)
                    window.open(item.asset.url, "_blank")
            }}>
                <ThumbImage src={`/assets/${item.asset?.thumb}`} alt="thumb"/>
                <Title>{item.title}</Title>
                {item.github? <GitHub onClick={() => {
                        window.open(item.github, "_blank")
                }} /> : null}
            </PortfolioItem>
        : null )}
    </MyWorkWrapper>
}

Work.defaultProps = {
    items: []
}

Work.propTypes = {
    items: PropTypes.array
}

export default Work