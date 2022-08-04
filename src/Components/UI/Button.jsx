import React from "react";
import classes from './stylesUI/UIStyle.module.css';

const Button = () => {
    return (
        <div className={classes.divBtn}>
           <button className={classes.buttonClasses}>Добавить пост</button>
        </div>
    )
}

export default Button;