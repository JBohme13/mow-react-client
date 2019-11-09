import React, { Component } from 'react'
import Context from '../Context'
import './LoginCredsForm.css'
import ValidationError from '../ValidationError/ValidationError';
import TextInput from '../FormComponents/TextInput'
import Select from '../FormComponents/Select'
import Button from '../BasicComponents/Button'
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
            <form id='new-login-form'>
                <TextInput
                    type='text'
                    id='new-user-name'
                    name='User Name'
                    required={true}
                    placeholder='Your user name here'
                    onChange={e => value.handleUserNameChange(e.target.value)}
                />
                {value.LoginCreds.userName.touched && <ValidationError message={this.validateNewUserName()} /> }
                <TextInput
                    type='text'
                    id='new-password'
                    name='Password'
                    required={true}
                    placeholder='Your password here'
                    onChange={e => value.handlePasswordChange(e.target.value)}
                />
                {value.LoginCreds.password.touched &&  <ValidationError message={this.ValidateNewPassword()} />}
                <Select
                    id='register-select'
                    name='Who will be completing this registration?'
                    required={true}
                    onChange={e => value.handleRegisterSelectChange(e.target.value)}
                    options={[
                        {value:'', name:'--Select one'},
                        {value:'client', name:'Self'},
                        {value:'family', name:'Family member'},
                        {value:'friend', name:'Friend'},
                        {value:'social-worker', name:'Social worker'},
                        {value:'other', name:'Other'}
                    ]}
                />
                {value.LoginCreds.RegisterSelect === 'other' ? <ExplainBox id='register-select'/> : ''}
                
                {value.LoginCreds.userName.touched && <ValidationError message={this.validateNewUserName()} /> }
                <Button
                    name='Continue'
                    onClick={event => this.handleNewLoginClick(event)}
                />
            </form>
        )
    }
}