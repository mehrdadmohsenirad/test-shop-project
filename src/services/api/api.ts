import axios from "axios";

export const mainUrl = axios.create({
  baseURL: "https://fakestoreapi.com",
});
