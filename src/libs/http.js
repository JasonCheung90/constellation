import { JUHE_APPKEY } from "@/config/keys";
import axios from "axios";

function axiosGet(options) {
  axios({
    url: options.url,
    method: "get",
    params: {
      key: JUHE_APPKEY,
    },
  })
    .then((res) => {
      options.success(res.data);
    })
    .catch((error) => {
      options.error(error);
    });
}

export { axiosGet };
