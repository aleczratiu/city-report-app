import { connect } from 'react-redux';
import AddIssue from './AddIssue';
import { addIssue } from '../../../actions/addIssue';
import { ADD_ISSUE_MUTATION } from '../../../../src/apollo/mutations';
import { graphql } from 'react-apollo';

const issueWithData = graphql(
    ADD_ISSUE_MUTATION,
    {
        props: ({ ownProps, mutate }) => ({
            async addIssue(variables) {
                console.log('test');
                try {
                    const response = await mutate({ variables });

                    const { data: { addIssue: { id, title, image, description, position: { lat, lng } } } } = response;

                    console.log('response', response);

                    ownProps.addIssue({
                        id,
                        title,
                        description,
                        image,
                        position: {
                            lat,
                            lng
                        }
                    });
                } catch (e) {
                    console.log('e', e);
                }
            }
        })
    }
)(AddIssue);

export default connect(
    null,
    dispatch => ({
        addIssue: response => dispatch(addIssue(response)),
    })
)(issueWithData);
