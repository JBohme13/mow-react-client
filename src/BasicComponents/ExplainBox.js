import React from 'react'
import './ExplainBox.css'

export default function ExplainBox() {
    return (
        <section id='explain-container'>
            <label 
                htmlFor='explain-box'
                id='explain-label'
            >
                Please explain
            </label>
            <textarea
                type='text'
                id='explain-box'
                aria-required='true'
            >   
            </textarea>
        </section>
    );
}