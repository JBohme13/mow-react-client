import React, { Component } from 'react'
import Context from '../Context'
import './Login.css'

export default class Login extends Component {
    static contextType = Context

    handleLoginClick = () => {
        this.context.history.push('/home')
    }

    handleRegisterClick = () => {
        this.context.history.push('/newLogin')
    }
    render() {
        return(
            <form id='login-form'>
                <label htmlFor='user-name'>User Name</label>
                <input 
                    type='text'
                    id='user-name'
                    className='login-input'
                    name='user-name'
                    required={true}
                    aria-required='true'
                    placeholder='Your user name here'
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='text'
                    id='password'
                    className='login-input'
                    name='password'
                    required={true}
                    aria-required='true'
                    placeholder='Your password here'
                />
                <button
                    type='submit'
                    id='login-button'
                    onClick={this.handleLoginClick}
                >
                    Login
                </button>
                <h2 id='register-header'>New to Meals on Wheels? Click Register below to Sign up!</h2>
                <button
                    id='register-button' 
                    onClick={this.handleRegisterClick}
                >
                    Register
                </button>
            </form>
        )
    }
}