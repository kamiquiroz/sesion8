import React, {useState} from 'react'
import { FormTextInput} from './FormTextInput'
import "./index.css"

export function Form(props) {

    const [title, settitle] = useState(props.title)

    const handleChange = (e) => {
        let target = e.target;
        if (!e.target.value)
            settitle(() => (props.title));
        else
            settitle(() => ({value: target.value}));
    }
    return (
        <div className="form">
            <h2 className="result">{title.value}</h2>
            <FormTextInput label="Formulario de contacto" onChange={handleChange}/>
        </div>
    )
}
