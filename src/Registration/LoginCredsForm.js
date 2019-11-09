import React, { Component } from 'react'
import Context from '../Context'
import './LoginCredsForm.css'
import ValidationError from '../ValidationError/ValidationError';
import ExplainBox from '../BasicComponents/ExplainBox';

export default class LoginCredsForm extends Component {
    static contextType = Context;
    handleNewLoginClick = event => {
        event.preventDefault();
        this.context.history.push('/contact')
    }

    validateNewUserName = () => {
        const userName = this.context.LoginCreds.userName.value;
        if (userName === '') {
            return 'User name is required'
        }

        if (userName.length < 3) {
            return 'User name must be at least 3 characters'
        }

        if (userName.length > 72) {
            return 'User name must be 3 to 72 characters'
        }
    }

    ValidateNewPassword = () => {
        const password = this.context.LoginCreds.password.value;
        if (password === '') {
            return 'Password is required'
        }

        if (password.length < 6) {
            return 'Password must be at least 6 characters'
        }

        if (password.length > 72) {
            return 'Password must be no more that 72 characters'
        }


    }

    render() {
        const value = this.context;
        return(
            <section>
                <form id='new-login-form'>
                    <label
                        htmlFor='register-select'
                        className='login-label'
                    >
                        Who will be completing this registraton?
                    </label>
                    <select 
                        id='register-select'
                        onChange={e => value.handleRegisterSelectChange(e.target.value)}
                    >
                        <option value=''>--Select one</option>
                        <option value='client'>Self</option>
                        <option value='family'>Family member</option>
                        <option value='friend'>Friend</option>
                        <option vlaue='socail-worker'>Social Worker</option>
                        <option value='other'>Other</option>
                    </select>
                    {value.LoginCreds.RegisterSelect === 'other' ? <ExplainBox /> : ''}
                    <label 
                        htmlFor='user-name'
                        className='login-label'
                    >
                        Select your user Name
                    </label>
                    <input 
                        type='text'
                        id='new-user-name'
                        name='user-name'
                        className='login-input'
                        required={true}
                        aria-required='true'
                        placeholder='Your user name here'
                        onChange={e => value.handleUserNameChange(e.target.value)}
                    />
                    {value.LoginCreds.userName.touched && <ValidationError message={this.validateNewUserName()} /> }
                    <label 
                        htmlFor='password'
                        className='login-label'
                    >
                        Enter your new password
                    </label>
                    <input
                        type='text'
                        id='new-password'
                        name='password'
                        className='login-input'
                        required={true}
                        aria-required='true'
                        placeholder='Your password here'
                        onChange={e => value.handlePasswordChange(e.target.value)}
                    />
                    {value.LoginCreds.password.touched &&  <ValidationError message={this.ValidateNewPassword()} />}
                    <button
                        type='submit'
                        id='login-button'
                        onClick={event => this.handleNewLoginClick(event)}
                    >
                        Continue
                    </button>
                </form>
            </section>
        )
    }
}