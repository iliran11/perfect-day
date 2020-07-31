import axios from "axios";
import getConfig from "next/config";

const {publicRuntimeConfig} = getConfig()

export const sendDay = (day) => {
  axios({
    method: "post",
    data: day,
    url: `${publicRuntimeConfig.serverUrl}/day`,
  });
};
