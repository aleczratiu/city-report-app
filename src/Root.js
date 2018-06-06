import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Register from './components/Auth/Register/Register.container';
import Login from './components/Auth/Login/Login.container';
import PrivateRoute from './components/core/PrivateRoute';
import App from './components/App/App.container';
import AddIssue from './components/App/AddIssue/AddIssue.container';
import PublicRoute from './components/core/PublicRoute/PublicRoute';

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path='/' component={App} />
                        <PublicRoute exact path='/register' component={Register} />
                        <PublicRoute exact path='/login' component={Login} />
                        <PrivateRoute loggedUser={this.props.loggedUser} path="/admin" component={() => <h1>Admin page</h1>} />
                        <PrivateRoute loggedUser={this.props.loggedUser} path="/add-issue" component={AddIssue} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
};

Root.propTypes = {
    loggedUser: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
    }),
};

Root.defaultProps = {
    loggedUser: null,
};

export default Root;
