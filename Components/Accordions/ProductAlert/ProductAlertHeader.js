import React, {Component, PropTypes} from 'react'


// STYLE
const headerTextStyle = {
    fontWeight: '700'
}
const headerDirStyle = {
    float: 'right',
    marginLeft: '20px'
}
// VIEW
class ProductAlertHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <span className='header-text' style={headerTextStyle}>{this.props.headertext}</span>
                {
                    this.props.isBodyCollapsed ?
                        <span className='header-direction os-icon os-icon-chevron-down' style={headerDirStyle}></span>
                        : <span className='header-direction os-icon os-icon-chevron-up' style={headerDirStyle}></span>
                }
            </div>
        )
    }
}

ProductAlertHeader.propTypes = {
    headertext: PropTypes.string.isRequired,
    isBodyCollapsed: PropTypes.bool.isRequired
}

export default ProductAlertHeader