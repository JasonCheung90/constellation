import { axiosGet } from "@/libs/http";

function getData(consName, type) {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: "/api/constellation/getAll",
      params: { consName, type },
      success(data) {
        resolve(data);
      },
      error(error) {
        reject(error);
      },
    });
  });
}

export { getData };
