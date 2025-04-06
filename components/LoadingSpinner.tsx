"use client";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-gray-800 rounded-full" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}