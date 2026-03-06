import { api } from "./api";

export const fetcher = (url: string) =>
  api.get(`http://localhost:9090${url}`).then(res => res.data)