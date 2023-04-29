import React from 'react';
import '../stylesheet/BotonClear.css'

const BotonClear = (props) => {
    return (
        <div className='boton-clear' onClick={props.manejarClear}>
            {props.children}
        </div>
    );
}

export default BotonClear;
