import PropTypes from "prop-types"
import {FilterWrapper, FilterItem} from "./styles"
import AppContext from "context/AppContext"
import { useContext } from "react"
import { Actions } from "context/ContextVariables"

const Filter = props => {
    const { items } = props
    const { dispatch } = useContext(AppContext)
    return <FilterWrapper>
        {items.map(item => {
            return <FilterItem onClick={() => {
                dispatch({
                    type: Actions.SET_FILTER,
                    value: item.filter
                })
            }} key={item.id}>{item.filter}</FilterItem>
        })}
    </FilterWrapper>
}

Filter.defaultProps = {
    items: []
}

Filter.propTypes = {
    items: PropTypes.array
}

export default Filter