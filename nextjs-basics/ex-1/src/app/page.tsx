import { Form } from './components/Form';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
      <Form />
    </div>
  );
}
