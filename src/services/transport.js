import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

let api = axios.create({
  baseURL: publicRuntimeConfig.serverUrl,
});

export const sendDay = async (day) =>
  api({
    method: "post",
    data: {
      day,
    },
    url: `/day`,
  });

export const getDayById = async (id) =>
  api({
    method: "get",
    url: `/api/day/${id}`,
  });
