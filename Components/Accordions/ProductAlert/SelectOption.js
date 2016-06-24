import React,{Component} from 'react'
import {GlobalButtonStyles} from '../../Styles'
// STYLE

//VIEW
class SelectOption extends Component{
    constructor(props){
        super(props);

        this.getStyles = this.getStyles.bind(this);
    }
    getStyles(){
        var style = GlobalButtonStyles.GlobalBtnStyles;
        style = this.props.customStyles ? 
            Object.assign({},style,this.props.customStyles)
            :style;

        return style;
    }
    render(){
        var style = this.getStyles();
        return(
            <select className='product-alert-select' style={style}>
                {   
                    this.props.ProductOptions ? 
                    this.props.ProductOptions.map ((option,i) => {
                        return(
                            <option key={i}>{option.name}</option>
                        )
                    })
                    :<option>Select...</option>
                }
            </select>
        );
    }
}

export default SelectOption