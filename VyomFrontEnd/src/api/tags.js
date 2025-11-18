import { api } from "./client";

export const getAllTags = () =>
  api.get("/tags");

export const getTagBySlug = (slug) =>
  api.get(`/tags?filters[slug][$eq]=${slug}&populate=posts`);
