'use client';

import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    subscribeUpdates: false,
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
       style={{marginTop:"40px",  marginBottom:'40px'}}>
        <h1 className="text-2xl font-semibold text-white mb-6">Signup for Deltrax</h1>

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
          <label htmlFor="name" className="text-gray-400 block mb-2">
            What should we call you?
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Bonnie Green"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="text-gray-400 block mb-2">
            Phone
          </label>
          <div className="flex">
            <select
              className="bg-gray-700 text-white rounded-l px-3"
              name="countryCode"
            >
              <option value="US">USA</option>
              <option value="FR">France</option>
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number"
              className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-r"
            />
          </div>
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
            placeholder="name@deltrax.com"
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

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="text-gray-400 block mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="referralCode" className="text-gray-400 block mb-2">
            Referral Code (Optional)
          </label>
          <input
            type="text"
            id="referralCode"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleInputChange}
            placeholder="SFDG23DFGF"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded"
          />
        </div>

        <div className="mb-4 flex items-start">
          <input
            type="checkbox"
            id="subscribeUpdates"
            name="subscribeUpdates"
            checked={formData.subscribeUpdates}
            onChange={handleInputChange}
            className="mr-2 mt-1"
          />
          <label htmlFor="subscribeUpdates" className="text-gray-400">
            Email me about product updates and resources.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition"
        >
          Sign Up
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          By signing up, you are creating a Deltrax account, and you agree to
          Deltrax's <a href="#" className="text-yellow-500 underline">Terms of Use</a> and <a href="#" className="text-yellow-500 underline">Privacy Policy</a>.
        </p>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account? <a href="#" className="text-yellow-500 underline">Login here</a>
        </p>
      </form>
    </div>
  );
}
