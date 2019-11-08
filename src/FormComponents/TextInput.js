import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

export default function TextInput(props) {
    return (
        <section id='text-input-container'>
            <label
                htmlFor={props.id}
                className='form-label'
            >
                {props.name}
            </label>
            <input
                type={props.type}
                id={props.id}
                className='text-input'
                required={props.required}
                aria-required={props.required}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </section>
    )
};

TextInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func
};

TextInput.defaultProps = {
    id: '',
    name: '',
    placeHolder: '',
    required: true,
    onChange: () => {},
};