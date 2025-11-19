import { api } from "./client";

export const getPosts = () => api.get("/posts?populate=*");

export const getPostsWithRelations = () =>
  api.get("/posts?populate=author,coverImage,categories,tags");

export const getPost = (slug) =>
  api.get(`/posts?filters[slug][$eq]=${slug}&populate=*`);

export const searchPosts = (query) =>
  api.get(`/posts?filters[title][$containsi]=${query}&populate=*`);
