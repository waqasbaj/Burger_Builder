import React from 'react'

import classes from './BuildControl.css'

const buildControl = (props) =>{

    <div className = {classes.BuildControl}>
        <div className = {classes.label}>{props.label}</div>
        <buttom className={classes.Less}>Less</buttom>
        <buttom className={classes.More}>More</buttom>
    </div>
}

export default buildControl