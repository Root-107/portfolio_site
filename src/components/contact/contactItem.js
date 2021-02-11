import PropTypes from "prop-types"

const ContactItem = props => {
    const { name, url, thumb } = props
    return <>
        {name}
        {url}
        {thumb}
    </>
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired
}

export default ContactItem
