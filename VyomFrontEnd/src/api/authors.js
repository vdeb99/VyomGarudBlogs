import { api } from "./client";

export const getAuthorById = (id) =>
  api.get(`/authors/${id}?populate=*`);

