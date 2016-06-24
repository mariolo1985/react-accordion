import React, {Component} from 'react'
import {Colors} from '../Styles'

// style
const bodyStyle = {
    backgroundColor: Colors.colorInterface.colorBg,
    overflow: 'hidden',
    transition: 'all .5s'
}
const hideBody = {
    maxHeight: '0px'
}
const showBody = {
    maxHeight: '500px'
}
// VIEW
class AccordionBody extends Component {
    constructor(props) {
        super(props);

        this.getStyles = this.getStyles.bind(this);
    }
    getStyles() {
        var style = bodyStyle;

        style = this.props.isCollapsed ?
            Object.assign({}, style, hideBody) :
            Object.assign({}, style, showBody);

        return style;
    }
    render() {
        var bodyClass = this.props.isCollapsed ? 'accordion-body hiding' : 'accordion-body showing';
        var style = this.getStyles();

        return (
            <div className={bodyClass} style={style}>
                {this.props.children}
            </div>
        )
    }
}

export default AccordionBody