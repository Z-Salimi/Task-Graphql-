import { gql } from "@apollo/client";

export const signupMutation = gql`
 mutation CreateUser($input: AuthInput!) {
  createUser(input: $input) {
    token
  }
}
`;