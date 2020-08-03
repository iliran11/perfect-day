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
    url: "api/day",
  });

export const getDayById = async (id) =>
  (
    await api({
      method: "get",
      url: `/api/day/${id}`,
    })
  ).data;

export const getDaysList = async () => {
  return (
    await api({
      method: "get",
      url: "/api/days",
    })
  ).data;
};
