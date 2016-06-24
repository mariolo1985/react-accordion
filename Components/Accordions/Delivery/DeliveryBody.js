import React, {Component} from 'react'
import DeliveryOption from '../Delivery/DeliveryOption'
import {PrimaryButton} from '../../Buttons'
import {Textbox} from '../../Inputs'
import {Colors} from '../../Styles'

// STYLE
const deliveryUpdateStyle = {
    borderTop: '1px solid ' + Colors.colorInterface.colorDkBrd,
    borderBottom: '1px solid ' + Colors.colorInterface.colorDkBrd,
    padding: '13px 20px',
    textAlign: 'right'
}
const deliveryInputZipStyle = {
    borderRadius: '3px 0 0 3px'
}
const updateButtonStyles = {
    borderRadius: '0 3px 3px 0'
}
// VIEW
class DeliveryBody extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <div className='delivery-update' style={deliveryUpdateStyle}>
                    <Textbox className='delivery-zip' placeholderText='Zip Code' customStyles={deliveryInputZipStyle} /><PrimaryButton labeltext="Update" customStyles={updateButtonStyles}/>
                </div>
                {
                    this.props.DeliveryOptions?
                    this.props.DeliveryOptions.map((option, i) => {
                        return (<DeliveryOption key={i} {...option}/>)
                    })
                    :null
                }
            </div>
        );
    }
}

DeliveryBody.defaultProps = {
    DeliveryOptions: []
}
export default DeliveryBody