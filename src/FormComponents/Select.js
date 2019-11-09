import React from 'react'
import './Select.css'

export default function Select(props) {
    let options = props.options.map((option, i) => {
                    return <option key={i} value={option.value}>{option.name}</option>
                  })
    return(
        <section id='select-container'>
            <label
                htmlFor={props.id}
                className='select-label'
            >
                {props.name}
            </label>
            <select
                id={props.id}
                className='select-input'
                required={props.required}
                aria-required={props.required}
                onChange={props.onChange}
            >
                {options}
            </select>
        </section>
    )
}