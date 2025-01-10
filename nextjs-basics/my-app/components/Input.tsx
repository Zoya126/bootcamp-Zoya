"use client"

export const Input = ({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full p-4 border-2 border-pink-300 text-white-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
      placeholder="Enter your username"
    />
  );
  