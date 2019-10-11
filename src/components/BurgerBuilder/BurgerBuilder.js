import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


class BurgerBuilder extends Component  {
    state = {
        // ingredients :{
        //     salad : 1,
        //     bacon : 1,
        //     cheese : 2,
        //     meat : 2
        // }
        ingredients :{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <div> <BuildControls/></div>
            </Aux>
        )
    }
}

export default BurgerBuilder