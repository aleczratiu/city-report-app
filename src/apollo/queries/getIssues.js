import gql from 'graphql-tag';

const GET_ISSUES_QUERY = gql`
query getIssues {
    getIssues {
      id,
      title,
      image,
      description
    }
  }
`;

export default GET_ISSUES_QUERY;
