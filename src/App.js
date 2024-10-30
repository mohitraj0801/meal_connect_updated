
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import FoodBankDashboard from './components/FoodBankDashboard';
import RestaurantDashboard from './components/RestaurantDashboard';

function App() {
  return (
    <Router>
      <div>
        <h1>MealConnect</h1>
        <Routes>
          <Route path="/foodbank" element={<FoodBankDashboard />} />
          <Route path="/restaurant" element={<RestaurantDashboard />} />
          
          <Route path="/" element={<h2>Welcome to MealConnect! Please select a role.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
