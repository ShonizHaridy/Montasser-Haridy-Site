'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-6">
          <span className="text-red-600 font-bold text-2xl">!</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-navy-600 text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}