import React, { Component } from 'react'
import Context from '../Context'
import './Service.css'

export default class Service extends Component {
    static contextType = Context;
    render() {
        return(
            <section id='service-container'>
                <h1 id='service-banner'>Building your meal schedule</h1>
                <h2 className='service-sub-banner'>Start by selecting which meals you would like for each day we deliver (Monday thru Friday).</h2>
                <form id='service-form'>
                    <div className='service-section'>
                        <label 
                            htmlFor='service-select-1'
                            className='service-label'
                        >
                            Monday
                        </label>
                        <select
                            id='service-select-1'
                            className='service-radio'
                        >
                            <option value=''>--Select one</option>
                            <option value='AmOnly'>AM meal only</option>
                            <option value='PmOnly'>PM meal only</option>
                            <option value='both'>Both AM and PM meals</option>
                        </select>
                    </div>
                    <div className='service-section'>
                        <label 
                            htmlFor='service-select-2'
                            className='service-label'
                        >
                            Tuesday
                        </label>
                        <select
                            id='service-select-2'
                            className='service-radio'
                        >
                            <option value=''>--Select one</option>
                            <option value='AmOnly'>AM meal only</option>
                            <option value='PmOnly'>PM meal only</option>
                            <option value='both'>Both AM and PM meals</option>
                        </select>
                    </div>
                    <div className='service-section'>
                        <label 
                            htmlFor='service-select-3'
                            className='service-label'
                        >
                            Wednesday
                        </label>
                        <select
                            id='service-select-3'
                            className='service-radio'
                        >
                            <option value=''>--Select one</option>
                            <option value='AmOnly'>AM meal only</option>
                            <option value='PmOnly'>PM meal only</option>
                            <option value='both'>Both AM and PM meals</option>
                        </select>
                    </div>
                    <div className='service-section'>
                        <label 
                            htmlFor='service-select-4'
                            className='service-label'
                        >
                            Thursday
                        </label>
                        <select
                            id='service-select-4'
                            className='service-radio'
                        >
                            <option value=''>--Select one</option>
                            <option value='AmOnly'>AM meal only</option>
                            <option value='PmOnly'>PM meal only</option>
                            <option value='both'>Both AM and PM meals</option>
                        </select>
                    </div>
                    <div className='service-section'>
                        <label 
                            htmlFor='service-select-5'
                            className='service-label'
                        >
                            Friday
                        </label>
                        <select
                            id='service-select-5'
                            className='service-radio'
                        >
                            <option value=''>--Select one</option>
                            <option value='AmOnly'>AM meal only</option>
                            <option value='PmOnly'>PM meal only</option>
                            <option value='both'>Both AM and PM meals</option>
                        </select>
                    </div>
                    <h2 className='service-sub-banner'>Next select frozen meals for the weekends (delivered on Fridays)</h2>
                    <div className='service-section'>
                        <label 
                            htmlFor='service-select-6'
                            className='service-label'
                        >
                            Saturday
                        </label>
                        <select
                            id='service-select-6'
                            className='service-radio'
                        >
                            <option value=''>--Select one</option>
                            <option value='AmOnly'>AM meal only</option>
                            <option value='PmOnly'>PM meal only</option>
                            <option value='both'>Both AM and PM meals</option>
                        </select>
                    </div>
                    <div className='service-section'>
                        <label 
                            htmlFor='service-select-7'
                            className='service-label'
                        >
                            Sunday
                        </label>
                        <select
                            id='service-select-7'
                            className='service-radio'
                        >
                            <option value=''>--Select one</option>
                            <option value='AmOnly'>AM meal only</option>
                            <option value='PmOnly'>PM meal only</option>
                            <option value='both'>Both AM and PM meals</option>
                        </select>
                    </div>
                    <button 
                        id='service-submit'
                        onClick={e => this.context.handleServiceSubmit(e)}
                    >
                        Save
                    </button>
                </form>
            </section>
        )
    }
}