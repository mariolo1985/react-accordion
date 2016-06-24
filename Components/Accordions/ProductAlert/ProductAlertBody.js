import React, {Component, PropTypes} from 'react'
import {Colors} from '../../Styles'
import {Textbox} from '../../Inputs'
import {PrimaryButton} from '../../Buttons'
import {SelectOption,AlertOptions} from '../ProductAlert'

// STYLE
const paraStyle={
    padding:' 0 20px',
    color: Colors.colorText.colorTextDefault,
    fontSize:'12px'
}
const ddlOptionStyles={
        marginLeft: '20px',
        backgroundColor: Colors.colorGeneral.colorWhite
}
// VIEW
class ProductAlertBody extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <p style={paraStyle}>Stay in the know! Choose which alerts you'd like to receive on this product</p>
                <div>
                    <SelectOption {...this.props} customStyles={ddlOptionStyles}/>
                </div>
                <AlertOptions {...this.props}/>
                <div className='product-alert-zip-row'>
                    <Textbox placeholder='Zip Code' className='product-alert-zip'/>
                    <PrimaryButton labeltext='Submit'/>
                </div>
            </div>
        )
    }
}

export default ProductAlertBody