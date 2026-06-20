// app/sitemap.js

const baseUrl = "https://ak-decoration.vercel.app";

const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/gallery",
    "/contact",
];

const serviceRoutes = [
    "floral-decoration",
    "wedding-decoration",
    "stage-decoration",
];

export default function sitemap() {
    const staticUrls = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        priority: route === "/" ? 1.0 : 0.8,
    }));

    const serviceUrls = serviceRoutes.map((service) => ({
        url: `${baseUrl}/service-detail/${service}`,
        lastModified: new Date(),
        priority: 0.8,
    }));

    return [...staticUrls, ...serviceUrls];
}