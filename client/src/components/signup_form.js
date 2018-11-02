import React, { Component } from 'react';

import {UserForm, UserInput, UserButton, UserLink} from './user_form_style.js';

class SignUpForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSignUp = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    };

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    render() {
        return (
            <UserForm>
                <h1>news4u sign up</h1>
                <form onSubmit={ event => this.handleSignUp(event) }>
                    <UserInput type="text" name="email" onChange={ event => this.handleChange(event) } placeholder="User Email" />
                    <UserInput type="password" name="password" onChange={ event => this.handleChange(event) } placeholder="Password" />
                    <UserButton type="submit" >Sign Up</UserButton>
                </form> 
                <h4>Already registered? <UserLink onClick={this.props.handleSwitchForm}>Login!</UserLink></h4>              
            </UserForm>        
        );
    }
}

export default SignUpForm;
