import { api } from "./client";

export const getAuthorByDocId = (docId) => api.get(`/authors/${docId}?populate=*`);

export const getPostsByAuthor = (authorDocId) =>
  api.get(`/posts?filters[author][documentId][$eq]=${authorDocId}&populate=*`);
