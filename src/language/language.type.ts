import { gql } from "apollo-server";

export const langTypeDefs = gql`
  type Language {
    id: String
    code: String
    description: String
  }

  input LangInput {
    code: String!
    description: String!
  }

  input LangUInput {
    code: String
    description: String
  }

  type Query {
    langLabel: String
    languages: [Language!]
  }
  type Mutation {
    addLang(input: LangInput!): Language!
    updateLang(id: String!, input: LangUInput!): Language!
    deleteLang(id: String!): Language!
  }
`;
