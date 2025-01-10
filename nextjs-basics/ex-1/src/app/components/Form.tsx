"use client";
import { Input } from './Input';
import { Button } from './Button';
import { useState } from 'react';
import { Card } from './Card';
import { FaSmile } from "react-icons/fa";  // Importing Font Awesome hand wave-like icon

export const Form = () => {
  const [username, setUsername] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGreeting(`Hey `);  // Just "Hey" to allow icon + username
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit} className="max-w-[600px] w-4/4 p-8 bg-black rounded-xl shadow-xl space-y-6">
        <h2 className="text-3xl font-semibold text-center text-white">Welcome</h2>
        <p className="text-center text-black-500">Enter your username to get started</p>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        <Button />
        {greeting && (
          <Card message={
            <>
              {greeting}
              {username && ` ${username}`}
              <span className="ml-2">
                <FaSmile className="inline text-3xl text-white" />  {/* Hand wave icon after username */}
              </span>
            </>
          } />
        )}
      </form>
    </div>
  );
};
