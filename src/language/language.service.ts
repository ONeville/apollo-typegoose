import { Language } from "./language.model";
import { DataSource } from "apollo-datasource";
import { extendWithId, assertInput } from "../helper";
import { Model } from "mongoose";

export class LanguageService extends DataSource<object> {
  repo: Model<InstanceType<any>, {}>;

  constructor() {
    super();
    this.repo = new Language().getModelForClass(Language);
  }

  getAll() {
    return this.repo.find();
  }

  add(input: Language) {
    assertInput(input);
    return this.repo
      .create(input)
      .then(extendWithId)
      .then((data: Language) => data);
  }

  update(id: string, input: Language) {
    assertInput(id, input);
    console.dir(id);
    console.dir(input);
    return this.repo
      .findByIdAndUpdate({ _id: id }, input)
      .exec()
      .then(extendWithId)
      .then((data: Language) => data);
  }

  delete(id: string) {
    assertInput(id);
    return this.repo
      .findOneAndDelete({ _id: id })
      .exec()
      .then(extendWithId)
      .then((data: Language) => data);
  }
}
