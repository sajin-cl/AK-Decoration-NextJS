export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://ak-decoration.vercel.app/sitemap.xml",
  };
}