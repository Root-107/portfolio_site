import PropTypes from "prop-types"
import AppContext from "context/AppContext"
import { useContext, useEffect } from "react"

const Work = props => {
    const { items } = props
    const { filter } = useContext(AppContext)

    useEffect(() => {
        console.log(filter)
    },[filter])

    return <>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
    </>
}

Work.defaultProps = {
    items: []
}

Work.propTypes = {
    items: PropTypes.array
}

export default Work