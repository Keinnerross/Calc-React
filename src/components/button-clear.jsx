import React from "react";
import '../stylesheets/button-clear.css';

const ButtonClear = (props) =>{
    return(
    <div className="button-clear" onClick={props.clear}>
        {props.children}
    </div>
    );
};
export default ButtonClear;