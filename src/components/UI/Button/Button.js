import React from 'react';
import style from './Button.css';

const Button = (props) => {
    return ( 
        <button 
            className={`${style.Button} ${style[props.btntype]}`}
            onClick={props.clicked}> {props.children} </button>
     );
}
 
export default Button;