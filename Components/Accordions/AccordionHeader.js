import React, {Component, PropTypes} from 'react'
import Colors from '../Styles/Colors'

// STYLE 
const headerStyle = {
    borderTop: '1px solid ' + Colors.colorInterface.colorDkBrd,
    padding: '8px 20px',
    backgroundColor: Colors.colorGeneral.colorWhite,
    cursor: 'pointer'
}
// VIEW
class AccordionHeader extends Component {
    constructor(props) {
        super(props);

        this.handleHeaderClick = this.handleHeaderClick.bind(this);
    }
    handleHeaderClick() {
        this.props.onHeaderClick();
    }
    render() {
        return (
            <div onClick={this.handleHeaderClick} className='accordion-header' style={headerStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default AccordionHeader