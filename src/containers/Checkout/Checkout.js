import React, {Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

    state={
        ingredients: null,
        price : null
    }

    componentWillMount() {

        const query = new URLSearchParams(this.props.location.search)

        const ingredients = {}

        let price = null

         //'['salad', '1']

        for(let param of query.entries()){

            if(param[0] === 'price'){

            price = param[1]

            }else{
            ingredients[param[0]] = +param[1]
            }

        }

        this.setState({
            ingredients : ingredients,
            
        })
       
        
    }

    checkoutCancelHandler = () =>{

        this.props.history.goBack()

    }

    checkoutContinuedHandler = () =>{




        this.props.history.replace('/checkout/contact-data')

    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route 
                path ={this.props.match.url + '/contact-data'} 
                render= {(props) => <ContactData ingredients = {this.state.ingredients} price = {this.state.price} {...props}/>} />
            </div>
        )
    }





}

export default Checkout


