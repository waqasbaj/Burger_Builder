import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {

    componentDidUpdate () {

        console.log("Order Summary did Update")
    }

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey =>{

            return (<li key = {igKey}>
                        <span style={{textTransform:'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li>)
        })

        return (
            <Aux>
                <h3> Your Order </h3>
                <p> A Delicious Burger With Following Ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Your Total is : </strong>{this.props.Total.toFixed(2)}</p>
                <p> Continue to Checkout</p>
                <Button clicked ={this.props.purchaseContinue} btnType ="Success" >CONTINUE</Button>
                <Button clicked ={this.props.purchaseCancelled} btnType ="Danger">CANCEL</Button> 
    
            </Aux>
        )
            
    }

}

export default OrderSummary