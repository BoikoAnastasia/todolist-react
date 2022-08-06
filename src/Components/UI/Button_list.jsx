import React from "react";
import classes from './stylesUI/UIStyle.module.css';

const Button_list = () => {
    return (
        <div className={classes.divBtn}>
           <button className={classes.buttonClasses}>Удалить</button>
        </div>
    )
}

export default Button_list;