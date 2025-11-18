import { api } from "./client";

export const getAuthorBySlug = (slug) =>
  api.get(
    `/authors?filters[slug][$eq]=${slug}&populate=posts.thumbnail,avatar`
  );
