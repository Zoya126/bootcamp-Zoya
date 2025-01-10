"use client"
export const Card = ({ message }: { message: string }) => (
    <div className="mt-6 p-6 bg-gradient-to-r from-teal-400 via-green-400 to-blue-400 rounded-xl shadow-xl text-center">
      <p className="text-xl font-semibold text-black">{message}</p>
    </div>
  );
  