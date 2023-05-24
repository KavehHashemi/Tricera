import { gql } from "@apollo/client";

export const SETS_QUERY = gql`
  query Query {
    sets {
      id
      name
      lastReading
      createdAt
      cards {
        id
      }
    }
  }
`;
