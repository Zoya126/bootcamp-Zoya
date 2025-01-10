"use client";

import { Input } from './Input';
import { Button } from './Button';
import { useState } from 'react';
import { Card } from './Card';
import { FaSmile } from "react-icons/fa";

export const Form = () => {
  const [username, setUsername] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGreeting(username ? `Hey ${username}` : `Hey there!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[600px] w-full p-8  dark:bg-gray-800 rounded-xl shadow-xl space-y-6 transition-colors"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">
        Welcome
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Enter your username to get started
      </p>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      <Button />
      {greeting && (
        <Card
          message={
            <>
              {greeting}
              <span className="ml-2">
                <FaSmile className="inline text-3xl text-pink-400" aria-hidden="true" />
              </span>
            </>
          }
        />
      )}
    </form>
  );
};
