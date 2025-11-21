import { api } from "./client";

export const getPosts = () =>
  api.get("/posts?populate=*");

export const getPostsWithRelations = () =>
  api.get("/posts?populate=*");

export const getPost = (slug) =>
  api.get(`/posts?filters[slug][$eq]=${slug}&populate=*`);

