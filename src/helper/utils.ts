export function extend(dumb, input) {
  const obj1 = dumb;

  for (const prop in input) {
    if (Object.keys(input).indexOf(prop) !== -1 && input[prop] !== undefined) {
      obj1[prop] = input[prop];
    }
  }
  return obj1;
}

export function extendWithId(input) {
  let obj = input;
  if (Object.keys(input).indexOf("_id") !== -1 && input["_id"] !== undefined) {
    obj = { ...obj, id: input["_id"] };
  }
  return obj;
}

export function assertInput(...input) {
  for (const value in input) {
    if (value === null || value === undefined) {
      throw new Error("Invalid Input");
    }
  }
}
