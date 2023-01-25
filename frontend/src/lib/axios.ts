import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.101:8089/api/v1",
});
