export const baseUrl = "https://tannerfinlay.dev";

export default async function sitemap() {
  let routes = ["/about", "/work"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
