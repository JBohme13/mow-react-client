import React, { Component } from 'react'
import Context from '../Context'
import './EditInfo.css'

export default class EditInfo extends Component {
    static contextType = Context;
    handleClientContactNext = event => {
        event.preventDefault();
        this.context.history.push('/editContact')
    }

    handleEmergencyContactNext = event => {
        event.preventDefault();
        this.context.history.push('/editEmergency')
    }

    handleClientInfoNext = event => {
        event.preventDefault();
        this.context.history.push('/editInformation')
    }
    render() {
        return(
            <section id='edit-container'>
                <h1 id='edit-banner'>Select information to edit</h1>
                <button 
                    className='edit-button'
                    onClick={e => this.handleClientContactNext(e)}
                >
                    your contact information
                </button>
                <button 
                    className='edit-button'
                    onClick={e => this.handleEmergencyContactNext(e)}
                >
                    Emergency contact information
                </button>
                <button 
                    className='edit-button'
                    onClick={e => this.handleClientInfoNext(e)}
                >
                    your personal information
                </button>
            </section>
        )
    }
}