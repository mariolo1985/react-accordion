import React, {Component, PropTypes} from 'react'
import {AccordionHeader, AccordionBody} from '../../Accordions'
import {ProductAlertHeader, ProductAlertBody} from '../ProductAlert'
import {GlobalAccordionStyles} from '../../Styles'

// VIEW
class AccordionProductAlert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isBodyCollapsed: true
        }

        this.onHeaderClick = this.onHeaderClick.bind(this);
    }
    onHeaderClick() {
        var isCurrBodyCollapsed = this.state.isBodyCollapsed;

        this.setState({
            isBodyCollapsed: !isCurrBodyCollapsed
        });
    }
    render() {
        return (
            <div className='accordion-container' style={GlobalAccordionStyles.DefaultStyle}>
                <AccordionHeader onHeaderClick={this.onHeaderClick}>
                    <ProductAlertHeader {...this.props} isBodyCollapsed={this.state.isBodyCollapsed}/>
                </AccordionHeader>
                <AccordionBody isCollapsed={this.state.isBodyCollapsed}>
                    <ProductAlertBody {...this.props}/>
                </AccordionBody>
            </div>
        );
    }
}

AccordionProductAlert.propTypes = {
    headertext: PropTypes.string.isRequired
}
export default AccordionProductAlert