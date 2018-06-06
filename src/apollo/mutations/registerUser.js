import gql from 'graphql-tag';

const REGISTER_USER_MUTATION = gql`
    mutation RegisterUser(
        $firstName: String!,
        $lastName: String!,
        $email: String!,
        $password: String!,
        $updatedAt: String!,
        $createdAt: String!,
    ) {
        addUser(
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            password: $password
            updatedAt: $updatedAt
            createdAt: $createdAt
        ) {
            firstName,
            lastName,
            email,
            updatedAt,
            createdAt,
            sessionToken
        }
    }
`;

export default REGISTER_USER_MUTATION;
