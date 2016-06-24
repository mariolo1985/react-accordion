import React, {Component, PropTypes} from 'react'
import {DeliveryHeader, DeliveryBody} from '../Delivery'
import {AccordionHeader, AccordionBody} from '../../Accordions'
import {GlobalAccordionStyles} from '../../Styles'


// VIEW
class AccordionDelivery extends Component {
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
                    <DeliveryHeader isBodyCollapsed={this.state.isBodyCollapsed} {...this.props}/>
                </AccordionHeader>
                <AccordionBody {...this.props} isCollapsed={this.state.isBodyCollapsed}>
                    <DeliveryBody {...this.props}/>
                </AccordionBody>
            </div>
        );
    }
}

AccordionDelivery.propTypes = {
    headertext: PropTypes.string.isRequired
}
export default AccordionDelivery