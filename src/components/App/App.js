import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../core/Header';
import { getSessionToken } from '../../utils/auth';

class App extends Component {
    Login = () => {
        if (getSessionToken()) {
            return (
                <Header>
                    <Link to="add-issue">Add issue</Link>
                    <Link to="/my-profile">My profile</Link>
                </Header>
            )
        } else {
            return (
                <Header>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </Header>);
        }
    };

    getIssues = () => {
        return this.props.getIssues.map(issue => {
            return (
                <div key={issue.id}>{issue.title}</div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.Login()}
                {!this.props.loading ? this.getIssues() : null}
            </div>
        )
    }
};

export default App;
