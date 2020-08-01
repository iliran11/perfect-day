import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const sendDay = async (day) =>
  axios({
    method: "post",
    data: {
      day,
    },
    url: `${publicRuntimeConfig.serverUrl}/day`,
  });

export const getDayById = async (id) =>
  axios({
    method: "get",
    url: `${publicRuntimeConfig.serverUrl}/api/day/${id}`,
  });
