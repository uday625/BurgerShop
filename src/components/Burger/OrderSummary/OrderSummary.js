import React from 'react';

import Button from '../../UI/Button/Button';

import "./OrderSummary.css"

const OrderSummary = (props) => {

    
    const ingredientSummary = Object.keys(props.ingredients)
        .map(eachKey=>{
            return(
                <li key={eachKey}> 
                    <span style={{textTransform:'capitalize'}}>{eachKey} </span>:{props.ingredients[eachKey]}
                </li>
            )
        });

    return ( 
        <div className="OrderSummary">
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong> Total Price: {props.price.toFixed(2)}</strong></p>
            <p> Do you want to Checkout?</p>

            <Button btntype="Button Danger" clicked ={props.cancelled}> CANCEL </Button>
            <Button btntype="Button Success" clicked={props.continue}> CONTINUE </Button>
        </div>
     );
}
 
export default OrderSummary;