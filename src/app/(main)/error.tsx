'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <div className="flex flex-col items-center p-8 bg-white shadow-md rounded-2xl max-w-md text-center">
        <AlertTriangle className="text-red-500 w-16 h-16 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">
          We encountered an unexpected error. Please try again or refresh the page.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
      <p className="mt-6 text-sm text-gray-400">Error details logged to console.</p>
    </div>
  )
}
