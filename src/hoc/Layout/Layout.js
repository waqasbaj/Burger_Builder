import React, { Component} from 'react'
import Aux from '../Aux/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer : true
    }


    sideDrawerCLoseHandler = () =>{
        console.log('you are in the close handler')
        this.setState ({
            showSideDrawer : false
        })
    }

    sideDrawerToggleHandler = () =>{

        this.setState((prevState) =>{

            return{showSideDrawer: !prevState.showSideDrawer}

        })
    }

    render () {
       return (<Aux>

                <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
                <SideDrawer 
                open = {this.state.showSideDrawer} 
                closed = {this.sideDrawerCLoseHandler}/>

            <main className = {classes.Content}>
                {this.props.children}
            </main>
            </Aux>)
    }
}
export default Layout