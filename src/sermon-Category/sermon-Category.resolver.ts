import { SermonCategory } from "./sermon-category.model";

export const SermonCategoryResolvers = {
  Query: {
    sermonCatoLabel: () => `Hello "World!", this is Sermon Category Label`,
    sermonCategories: async (_, __, { dataSources }) => {
      const response = await dataSources.sermonCategoryApi.getAll();
      return response;
    }
  },
  Mutation: {
    addSermonCategory: async (_, { input }, { dataSources }): Promise<SermonCategory> => {
      return await dataSources.sermonCategoryApi.add(input);
    },
    updateSermonCategory: async (_, { id, input }, { dataSources }): Promise<SermonCategory> => {
      return await dataSources.sermonCategoryApi.update(id, input);
    },
    deleteSermonCategory: async (_, { id }, { dataSources }): Promise<SermonCategory> => {
      return await dataSources.sermonCategoryApi.delete(id);
    }
  }
};
