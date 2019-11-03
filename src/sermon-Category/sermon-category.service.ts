import { SermonCategoryTrans } from "./sermon-category.model";
import { SermonCategory } from "./sermon-category.model";
import { DataSource } from "apollo-datasource";
import { extendWithId, assertInput } from "../helper";
import { Model } from "mongoose";

export class SermonCategorySvc extends DataSource<object> {
  repo: Model<InstanceType<any>, {}>;
  childRepo: Model<InstanceType<any>, {}>;

  constructor() {
    super();
    this.repo = new SermonCategory().getModelForClass(SermonCategory);
    this.childRepo = new SermonCategoryTrans().getModelForClass(
      SermonCategoryTrans
    );
  }

  async getAll() {
    const parent = await this.repo.find();
    const response = parent
      .map(extendWithId)
      .map(
        async p =>
          await p
            .populate({ path: "trans", model: "SermonCategoryTrans" })
            .execPopulate()
      );
    return response;
  }

  async add(input: SermonCategory) {
    assertInput(input, input.trans);
    const children = await this.childRepo.create(input.trans);
    input.trans = children;
    const response = await this.repo.create(input);
    return response;
  }

  update(id: string, input: SermonCategory) {
    assertInput(id, input);
    if (input.trans) {
      for (const child of input.trans as SermonCategoryTrans[]) {
        const { id, ...toUpdate } = child;
        this.childRepo.updateOne({ _id: child.id }, toUpdate).exec();
      }
    }
    const { trans, ...parent } = input;
    return this.repo
      .findOneAndUpdate({ _id: id }, parent)
      .then(extendWithId)
      .then((data: SermonCategory) => data);
  }

  async delete(id: string) {
    assertInput(id);
    const parent = await this.repo.findById(id);
    for (const i of parent.trans) {
      this.childRepo.deleteOne({ _id: i }).exec();
    }
    return this.repo
      .deleteOne({ _id: id })
      .then(extendWithId)
      .then((data: SermonCategory) => data);
  }
}
