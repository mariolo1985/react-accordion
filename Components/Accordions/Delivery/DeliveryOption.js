import React, {Component} from 'react'

// STYLES
const deliveryRowStyle = {
    padding: '0 20px',
    margin: '10px 0'
}
const deliveryRadioWrapperStyle = {
    display: 'inline-block',
    width: '30%'
}
const deliveryRadioLabelStyle = {
    display: 'inline'
}
const deliveryRadioStyle = {
    marginRight: '15px'
}
const deliveryDurationStyle = {
    display: 'inline-block'
}
const deliveryCostStyle = {
    display: 'inline-block',
    float: 'right'
}

// VIEW
class DeliveryOption extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='deliveryoption-row' style={deliveryRowStyle}>
                <span className='deliveryradio' style={deliveryRadioWrapperStyle}>
                    <label>
                        <input type='radio' name='deliveryoption' data-deliverytype={this.props.DeliveryDuration} style={deliveryRadioStyle}/>{this.props.DeliveryType}
                    </label>
                </span>
                <span className='deliveryduration' style={deliveryDurationStyle}>{this.props.DeliveryDuration}</span>
                <span className='deliverycost' style={deliveryCostStyle}>{this.props.DeliveryCost != 0 ? "$" + this.props.DeliveryCost.toFixed(2) : ""}</span>
            </div>
        );
    }
}

export default DeliveryOption