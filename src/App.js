import React, { useState } from 'react';
import { ShoppingCart, Bell, User } from 'lucide-react';
import './index.css';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <span className="text-xl font-bold">
                <span>Meal</span>
                <span className="text-green-500">Connect</span>
              </span>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-600">Home</a>
                <a href="#" className="hover:text-gray-600">Delivery</a>
                <a href="#" className="hover:text-gray-600">About</a>
                <a href="#" className="hover:text-gray-600">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <ShoppingCart className="w-5 h-5" />
                <span className="ml-2">Your Cart (0)</span>
              </div>
              <User className="w-5 h-5" />
              <Bell className="w-5 h-5" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Tagline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium leading-relaxed">
            <span className="text-blue-900">"Delicious Meals</span>
            <span className="text-gray-400">, Generous Hearts</span>
            <span className="text-gray-400">,</span>
            <br />
            <span className="text-gray-400">Together We Can </span>
            <span className="text-blue-900">End Hunger"</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 bg-blue-50 rounded-lg p-8">
          {/* Left Side - Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src="/images/volunteersImage.jpg" // Use the correct path to your image
                  alt="Volunteers packing food"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src="/images/Donations.jpg" // Use the correct path to your image
                  alt="Donations"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src="/images/FoodDonation.jpg" // Use the correct path to your image
                alt="Food distribution"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                <span>Meal</span>
                <span className="text-green-500">Connect</span>
              </h2>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email here..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Type your password here..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Login
              </button>
              <div className="text-center text-sm">
                <span className="text-gray-600">Don't have an account? </span>
                <a href="#" className="text-blue-600 hover:underline">
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
