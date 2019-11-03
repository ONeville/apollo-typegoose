import { LanguageService } from "./language/language.service";
import { langTypeDefs, langResolvers } from "./language";
import {
  sermonCategoryTypeDefs,
  SermonCategoryResolvers,
  SermonCategorySvc
} from "./sermon-Category";

export const typeDefs = [langTypeDefs, sermonCategoryTypeDefs];

export const resolvers = [langResolvers, SermonCategoryResolvers];

export const serviceMapper = {
  langApi: new LanguageService(),
  sermonCategoryApi: new SermonCategorySvc()
};
