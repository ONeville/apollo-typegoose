import { Typegoose, prop, arrayProp, Ref } from "typegoose";

export class SermonCategoryTrans extends Typegoose {
  @prop({ required: true })
  languageId: string;

  @prop({ required: true })
  description: string;

  get id() {
    return this.id;
  }
}

export class SermonCategory extends Typegoose {
  @prop({ required: true })
  code: string;

  @arrayProp({ itemsRef: { name: SermonCategoryTrans } })
  trans: Ref<SermonCategoryTrans>[] | SermonCategoryTrans[];
}
