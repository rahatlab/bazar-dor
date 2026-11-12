const BASE =
  process.env.API_URL || "https://openapi.programming-hero.com/api/bazardor";

const get = async (path) => {
  const res = await fetch(`${BASE}${path}`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`API ${path}: ${res.status}`);
  return res.json();
};

export const getCategories = () => get("/categories");
export const getProducts = () => get("/products");
export const getCategory = (slug) => get(`/categories/${slug}`);
export const getProduct = (slug) => get(`/products/${slug}`);
