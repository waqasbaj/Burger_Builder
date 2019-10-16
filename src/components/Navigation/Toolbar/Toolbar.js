import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import Navigation from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <DrawerToggle clicked = {props.drawerToggleClicked}/>
        <div className = {classes.Logo}>
             <Logo />
        </div>
        <nav className ={classes.DesktopOnly}>
            <ul>
                <Navigation/>
            </ul>
        </nav>
    </header>

)

export default toolbar