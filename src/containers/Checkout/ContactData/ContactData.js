import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {

    state = {
        name : '',
        email : '',
        address : {
            street:'',
            postalCode:''
        },
        loading : false

    }

    orderHandler = (event) => {

        event.preventDefault()

        console.log(this.props.ingredients)

        this.setState({loading:true})

        const order = {
            ingredients : this.props.ingredients,
            price: this.props.price,
            customer : {
                name:'Waqas Bajwa',
                address: {
                    street: 'YOU know it',
                    coutnry: 'Canada'
                }, 
                email : 'younameit@gmail.com'
            },
            deliveryMethod : 'quickest'
        }

        axios.post('/orders.json', order)
        .then( response =>{
            console.log(response)
            // this.setState({loading : false, purchasing : false})
            this.props.history.push('/')

        })
        .catch(error =>{
            console.log(error)
            // this.setState({loading : false, purchasing : false})
        })
        // .finally(
        //     () =>{this.setState({loading : false})})



    }

    render(){
        let form = (<form >
            <input className={classes.Input} type='text' name='name' placeholder ='Your name'></input>
            <input className={classes.Input} type='email' name='email' placeholder ='Your Email'></input>
            <input className={classes.Input} type='text' name='street' placeholder ='Street'></input>
            <input className={classes.Input} type='text' name='postal' placeholder ='Postal Code'></input>
            <Button btnType = 'Success' clicked={this.orderHandler}>Order</Button>
        </form>)
        if(this.state.loading){
            form = <Spinner />
        }

        return(
            <div className={classes.ContactData}>
                <h4>
                    Enter your Contact Data
                </h4>
                {form}
                
            </div>
        )
    }


}


export default ContactData