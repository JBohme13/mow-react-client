import React, { Component, Fragment } from 'react'
import Context from '../Context'
import './LandingPage.css'

export default class LandingPage extends Component {
    static contextType = Context
    render () {
        const value = this.context;
        return (
            <Fragment>
                <h1>Welcome to the Meals On Wheels service request portal!</h1>
                <p>with the online portal you can set up meal service in just a few minutes!</p>
                <p>Please click continue below to either log in or register for an account</p>
                <button
                  className='next-button'
                  onClick={event => value.handleNextForLandingPage(event)}
                >
                    Continue
                </button>
            </Fragment>
        )
    }
}