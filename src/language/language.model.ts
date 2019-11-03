import { Typegoose, prop } from "typegoose";

export class Language extends Typegoose {
  @prop({ required: true })
  code: string;

  @prop({ required: true })
  description: string;
}
