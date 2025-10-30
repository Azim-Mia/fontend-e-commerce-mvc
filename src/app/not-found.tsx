'use client'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-9xl font-extrabold text-gray-300 tracking-widest">404</h1>
      <div className="bg-blue-500 text-white px-4 py-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <p className="mt-8 text-lg text-gray-600">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}
