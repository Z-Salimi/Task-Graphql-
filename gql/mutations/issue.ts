import { gql } from "@apollo/client";

export const CreateIssueMutation = gql`
  mutation CreateIssue($input: CreateIssueInput!) {
    createIssue(input: $input) {
      createdAt
    }
  }
`;
export const EditIssueMutation = gql`
  mutation EditIssue($input: EditIssueInput!) {
  editIssue(input: $input) {
  id,
    status
  }
}
`;