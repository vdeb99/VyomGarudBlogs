import { api } from "./client";

export const getAllCategories = () =>
  api.get("/categories?populate[posts][populate]=*");

export const getCategoryBySlug = (slug) =>
  api.get(`/categories?filters[slug][$eq]=${slug}&populate[posts][populate]=*`);
