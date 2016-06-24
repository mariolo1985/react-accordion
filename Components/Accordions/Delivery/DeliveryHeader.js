import React, {Component} from 'react'

// STYLE
const headerTextStyle = {
    fontWeight: '700'
}
const tooltipStyle = {
    padding: '0 15px',
    cursor: 'pointer'
}
const headerDirStyle = {
    float: 'right',
    marginLeft: '20px'
}
// VIEW
class DeliveryHeader extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <span className='header-text' style={headerTextStyle}>{this.props.headertext}</span>
                <span className='header-tip os-icon os-icon-information-circle' data-toggle='tooltip' data-placement='top' title='This is an approximate delivery date and is not a guarantee. Delivery estimates are available only for select items to be delivered in the contiguous United States, excluding APO/FPO addresses and PO boxes. Your final shipping cost will be available at checkout.' style={tooltipStyle}></span>
                {
                    this.props.isBodyCollapsed ?
                        <span className='header-direction os-icon os-icon-chevron-down' style={headerDirStyle}></span>
                        : <span className='header-direction os-icon os-icon-chevron-up' style={headerDirStyle}></span>
                }

            </div>
        );
    }
}

export default DeliveryHeader