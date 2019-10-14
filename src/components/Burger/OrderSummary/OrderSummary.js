import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'


const orderSummary = (props) =>{
    
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{

        return (<li key = {igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li>)
    })

    return (
        <Aux>
            <h3> Your Order </h3>
            <p> A Delicious Burger With Following Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Your Total is : </strong>{props.Total.toFixed(2)}</p>
            <p> Continue to Checkout</p>
            <Button clicked ={props.purchaseContinue} btnType ="Success" >CONTINUE</Button>
            <Button clicked ={props.purchaseCancelled} btnType ="Danger">CANCEL</Button> 

        </Aux>
    )

}

export default orderSummary