import { Language } from "./language.model";

export const langResolvers = {
    Query: {
        langLabel: () => `Hello "World!", this is Language Label`,
        languages: async (_, __, { dataSources }) => {
            const response = await dataSources.langApi.getAll();
            return response;
        }
    },
    Mutation: {
        addLang: async (_, { input }, { dataSources }): Promise<Language> => {
            return await dataSources.langApi.add(input);
        },
        updateLang: async (_, { id, input }, { dataSources }): Promise<Language> => {
            return await dataSources.langApi.update(id, input);
        },
        deleteLang: async (_, { id }, { dataSources }): Promise<Language> => {
            return await dataSources.langApi.delete(id);
        }
    }
};