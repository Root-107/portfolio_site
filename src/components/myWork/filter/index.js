import PropTypes from "prop-types"
import {FilterWrapper, FilterItem} from "./styles"
import AppContext from "context/AppContext"
import { useContext } from "react"
import { Actions } from "context/ContextVariables"

const Filter = props => {
    const { items } = props
    const { dispatch } = useContext(AppContext)
    return <FilterWrapper>
        <FilterItem onClick={() => {
                dispatch({
                    type: Actions.SET_FILTER,
                    value: ""
                })
            }}>Clear filter</FilterItem>
        {items.map(item => {
            return <FilterItem onClick={() => {
                dispatch({
                    type: Actions.SET_FILTER,
                    value: item.lable
                })
            }} key={item.id}>{item.lable}</FilterItem>
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