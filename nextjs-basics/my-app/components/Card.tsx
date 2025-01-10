"use client";

export const Card = ({ message }: { message: React.ReactNode }) => (
  <div className="p-6 rounded-xl shadow-xl text-center transition-colors bg-gray-100 dark:bg-gray-800">
    <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
      {message}
    </p>
  </div>
);
