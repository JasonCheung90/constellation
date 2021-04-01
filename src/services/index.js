import { getData } from "./request";

export default async (store) => {
  const consName = store.state.consName;
  const type = store.state.type;

  let data = await getData(consName, type);

  return data;
};
