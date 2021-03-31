import { JUHE_APPKEY } from "@/config/keys";
import axios from "axios";
import qs from "qs";

function axisoGet(options) {
  axios({
    url: options.url,
    method: "get",
    params: {
      key: JUHE_APPKEY,
      consName: qs.stringify(options.consName),
      type: options.type,
    },
  })
    .then((res) => {
      options.success(res.data);
    })
    .catch((error) => {
      options.error(error);
    });
}

export { axisoGet };
