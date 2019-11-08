import React from 'react'
import './TextArea.css'

export default function TextArea(props) {
    return(
        <section id='form-textarea'>
            <label
                htmlFor={props.id}
                className='form-label'
            >
                {props.name}
            </label>
            <textarea
                id={props.id}
                className='textarea-input'
                required={props.required}
                aria-required={props.required}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </section>
    )
}