import axios from "axios";

export const postDataApi = async (url, data) => {
  const res = await axios.post(`/api/${url}`, data);
  return res;
};

export const getDataApi = async (url, data) => {
  const res = await axios.get(`/api/${url}`, data);
  return res;
};
