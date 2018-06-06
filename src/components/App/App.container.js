import { connect } from 'react-redux';
import App from './App';
import { graphql } from 'react-apollo';
import { GET_ISSUES_QUERY } from '../../../src/apollo/queries';

const IssueWithData = graphql(
    GET_ISSUES_QUERY,
    {
        props: ({ data }) => data
    }
)(App)

export default connect(
    state => ({
        loggedUser: state.loggedUser,
    }),
    {}
)(IssueWithData);
