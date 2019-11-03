import { gql } from "apollo-server";

export const sermonCategoryTypeDefs = gql`
  type SermonCategoryTrans {
    id: String
    languageId: String
    description: String
  }

  type SermonCategory {
    id: String
    code: String
    trans: [SermonCategoryTrans]
  }

  input SermonCategoryTransInput {
    id: String
    languageId: String!
    description: String!
  }

  input SermonCategoryInput {
    code: String!
    trans: [SermonCategoryTransInput!]
  }

  input SermonCategoryUInput {
    code: String!
    trans: [SermonCategoryTransInput]
  }

  extend type Query {
    sermonCatoLabel: String
    sermonCategories: [SermonCategory!]
  }

  extend type Mutation {
    addSermonCategory(input: SermonCategoryInput!): SermonCategory!
    updateSermonCategory(
      id: String!
      input: SermonCategoryUInput!
    ): SermonCategory!
    deleteSermonCategory(id: String!): SermonCategory!
  }
`;
