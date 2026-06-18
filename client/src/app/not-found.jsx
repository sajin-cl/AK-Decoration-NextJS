import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
            <h1 className="text-7xl font-bold text-primary mb-4">
                404
            </h1>

            <h2 className="text-3xl font-semibold mb-3">
                Page Not Found
            </h2>

            <p className="text-gray-600 text-center max-w-md mb-8">
                The page you're looking for doesn't exist or may have been moved.
            </p>

            <Link
                href="/"
                className="bg-primary text-white px-6 py-3 rounded-md"
            >
                Back To Home
            </Link>
        </section>
    );
}