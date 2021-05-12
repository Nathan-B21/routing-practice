import React, {useState, useEffect} from 'react';

const Number = (props) =>{






    return (
        <div style={{backgroundColor:props.color1, color:props.color2}}>
            {
                !isNaN(props.num)?<p>The Number is {props.num}</p>
                :<p>The word is {props.num}</p>
            }
            
        </div>
    );
};
export default Number;