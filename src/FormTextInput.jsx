import React from 'react';

export function FormTextInput(props) {
    return (
        <fieldset>
            <legend>{props.label}</legend>
            <input type="text" placeholder="Ingrese su nombre" onChange={props.onChange}></input>
        </fieldset>
    )
}
