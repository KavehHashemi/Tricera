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

export const CARDS_QUERY = gql`
  query Query($id: ID) {
    cards(id: $id) {
      id
      question
      answer
      lastReading
      history
      createdAt
    }
  }
`;
