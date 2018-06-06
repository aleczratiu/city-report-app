import gql from 'graphql-tag';

const ADD_ISSUE_MUTATION = gql`
mutation addIssue (
    $title: String!,
    $description: String!,
    $image: String,
    $lat: String,
    $lng: String,
  ) {
    addIssue(
      title: $title
      description: $description
      image: $image
      position: {
        lat: $lat,
        lng: $lng
      }
    ) {
      id
      title
      description
      image
      position {
        lat
        lng
      }
    }
}
`;

export default ADD_ISSUE_MUTATION;