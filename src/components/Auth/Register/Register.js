import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../core/Wrapper';
import styles from './Register.scss';
import Header from '../../core/Header';
import Label from '../../core/Label';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rePassword: '',
        }
    }

    setFirstName = (firstName) => {
        this.setState({ firstName: firstName.target.value });
    };

    setLastName = (lastName) => {
        this.setState({ lastName: lastName.target.value });
    };

    setEmail = (email) => {
        this.setState({ email: email.target.value });
    };

    setPassword = (password) => {
        this.setState({ password: password.target.value });
    };

    setRePassword = (rePassword) => {
        if (rePassword === this.state.password) {
            console.log('GoodPassword');
        }
    };

    register = () => {
        this.props.registerUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            updatedAt: new Date(),
            createdAt: new Date(),
        })
    }

    render() {
        return (
            <div className={styles.Register_wrapper}>
                <Header>
                    <Link to="/">Home</Link>
                </Header>
                <Wrapper>
                    <div className={styles.registerForm}>
                        <h1>Register</h1>
                        <Label className={styles.label}>First name:</Label>
                        <input type="text" onChange={this.setFirstName} />
                        <Label className={styles.label}>Last name:</Label>
                        <input type="text" onChange={this.setLastName} />
                        <Label className={styles.label}>Email:</Label>
                        <input type="email" onChange={this.setEmail} />
                        <Label className={styles.label}>Password:</Label>
                        <input type="password" onChange={this.setPassword} />
                        <Label className={styles.label}>Re-password:</Label>
                        <input type="password" onChange={this.setRePassword} />
                        <button onClick={this.register}>Register</button>
                    </div>
                </Wrapper>
            </div>
        );
    }
};

export default Register;
