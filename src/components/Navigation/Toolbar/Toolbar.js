import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import Navigation from '../NavigationItems/NavigationItems'


const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <div> MENU</div>
        <div className = {classes.Logo}>
             <Logo />
        </div>
        <nav>
            <ul>
                <Navigation/>
            </ul>
        </nav>
    </header>

)

export default toolbar