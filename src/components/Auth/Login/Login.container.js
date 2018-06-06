import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { CREATE_SESSION_TOKEN_MUTATION } from '../../../../src/apollo/mutations';
import { setUser } from '../../../actions/loggedUser';
import { setSessionToken } from '../../../utils/auth';
import Login from './Login';

const LoginUserWithData = graphql(
    CREATE_SESSION_TOKEN_MUTATION,
    {
        props: ({ ownProps, mutate }) => ({
            async createSessionToken(variables) {
                try {
                    const { data: { createSessionToken: { id, email, sessionToken } } } = await mutate({ variables });

                    await setSessionToken(sessionToken);

                    ownProps.setUser({
                        id,
                        email
                    });

                    ownProps.history.push('/');

                } catch(e) {
                    console.log('e', e);
                }
            }
        })
    }
)(Login);

export default connect(
    state => ({
        loggedUser: state.loggedUser,
    }),
    dispatch => ({
        setUser: response => dispatch(setUser(response))
    })
)(LoginUserWithData);