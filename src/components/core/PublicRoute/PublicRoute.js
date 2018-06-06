import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getSessionToken } from '../../../utils/auth';

const PublicRoute = ({ component: Component, ...rest, loggedUser }) => (
    <Route
        {...rest}
        render={props => (
            !getSessionToken() ?
                <Component {...props} />
            :
                <Redirect to='/' />
        )}
    />
);

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string,
    name: PropTypes.string,
};

PublicRoute.defaultProps = {
    path: '',
    name: null,
};

export default PublicRoute;
