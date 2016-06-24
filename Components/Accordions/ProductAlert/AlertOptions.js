import React, {Component} from 'react'
import {ClearFloats} from '../../Helpers'

// STYLE
const alertRowStyle={
    margin:'15px 0 30px 0',
    padding: '0 20px'
}
const alertOptionStyle = {
    float:'left',
    width: '33.33%'
}
const labelStyle = {
    fontSize: '12px'
}

// VIEW
class AlertOptions extends Component{
    constructor(props){
        super(props);

    }
    render(){
        
        return(
            <div className='product-alert-row' style={alertRowStyle}>
            <ClearFloats/>
                {
                    this.props.AlertOptions?
                    this.props.AlertOptions.map((option,i) => {
                        return(
                            <div key={i} className='product-alert-option' style={alertOptionStyle}>
                                <label style={labelStyle}>
                                    <input type='checkbox'/>{option.AlertType}
                                </label>
                            </div>
                        );
                    })
                    :null
                }
            <ClearFloats/>
            </div>
        )
    }
}

export default AlertOptions