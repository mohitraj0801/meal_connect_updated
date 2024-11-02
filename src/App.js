import React, { useState } from 'react';
import { Home, UtensilsCrossed, Store } from 'lucide-react';
import './index.css';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  
  const NavLink = ({ to, children, icon: Icon }) => (
    <button 
      onClick={() => setCurrentPage(to)}
      className={`flex items-center px-3 py-2 rounded hover:bg-blue-700 ${currentPage === to ? 'bg-blue-700' : ''}`}
    >
      <Icon className="w-5 h-5 mr-1" />
      {children}
    </button>
  );

  
  const FoodBankDashboard = () => (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Food Bank Dashboard</h2>
      <p className="text-gray-600">Welcome to your food bank management portal.</p>
    </div>
  );

  const RestaurantDashboard = () => (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Restaurant Dashboard</h2>
      <p className="text-gray-600">Welcome to your restaurant donation portal.</p>
    </div>
  );

  
  const HomePage = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8">Welcome to MealConnect</h2>
      <p className="text-gray-600 mb-8">
        Connecting restaurants with surplus food to food banks in need.
        Choose your role to get started:
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <button 
          onClick={() => setCurrentPage('restaurant')}
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <UtensilsCrossed className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">I'm a Restaurant</h3>
          <p className="text-gray-600">Donate surplus food and make a difference</p>
        </button>
        <button 
          onClick={() => setCurrentPage('foodbank')}
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Store className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">I'm a Food Bank</h3>
          <p className="text-gray-600">Connect with local restaurants and receive donations</p>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setCurrentPage('home')} 
              className="text-2xl font-bold"
            >
              MealConnect
            </button>
            <div className="flex space-x-4">
              <NavLink to="home" icon={Home}>Home</NavLink>
              <NavLink to="restaurant" icon={UtensilsCrossed}>Restaurants</NavLink>
              <NavLink to="foodbank" icon={Store}>Food Banks</NavLink>
            </div>
          </div>
        </div>
      </nav>

      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'foodbank' && <FoodBankDashboard />}
        {currentPage === 'restaurant' && <RestaurantDashboard />}
      </div>
    </div>
  );
};

export default App;
