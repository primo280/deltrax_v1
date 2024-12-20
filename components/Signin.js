
'use client';

import { useState } from 'react';

export default function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      style={{marginTop:'40px', marginBottom:'40px'}}>
        <h1 className="text-2xl font-semibold text-white mb-6">Welcome back</h1>

        <button
          type="button"
          className="w-full bg-gray-700 text-white py-2 px-4 rounded mb-4 flex justify-center items-center"
        >
          <img
            src="/icons8-google.svg"
            alt="Google icon"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="text-gray-400 px-2">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-gray-400 block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="name@example.com"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-gray-400 block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-400">
              Remember me
            </label>
          </div>
          <a href="#" className="text-gray-400 text-sm hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition"
        >
          Login
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Don’t have an account yet?{' '}
          <a href="#" className="text-yellow-500 underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
