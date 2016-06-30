>Note: This is a work-in-progress.
I need to update it to be more generic but I'm unsure how others would use this.  Any feedback is appreciated.

# React Accordion

This is a header and body accordion built in react


# Accordions

* Product Alert
```js
import {AccordionProductAlert} from '[package]'

const accProdOptions = {
    headertext: "Product Alerts",
    ProductOptions: [
        {
            name: "Select Option"
        },
        {
            name: "XS"
        },
        {
            name: "SM"
        },
        {
            name: "MD"
        },
        {
            name: "LG"
        }
    ],
    AlertOptions: [
        {
            AlertType: "Price Drop"
        },
        {
            AlertType: "Low Inventory"
        }
        ,
        {
            AlertType: "New Reviews"
        },
        {
            AlertType: "Exclusive Discounts"
        }
    ]
}

<AccordionProductAlert {...accProdOptions}/>
```
