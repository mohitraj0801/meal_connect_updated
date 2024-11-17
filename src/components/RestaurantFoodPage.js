import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import { MapPin } from 'lucide-react';
import { SearchSort } from '../components/common/SearchSort';
import { Card, CardContent } from '../components/ui/card';
import { Leaf } from 'lucide-react';  // Assuming you're using the Leaf icon
import { ShoppingCart, User, Search, Bell } from 'lucide-react';
const RestaurantDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <img 
          src="/images/12th.jpg" 
          alt="Food"
          className="rounded-lg w-full"
        />
      </div>
      <div>
        <h3 className="text-xl mb-2">Name of food</h3>
        <p className="text-gray-500">700 Calories / day</p>
        
        <div className="flex gap-4 my-4">
          <span>28 Meals</span>
          <span>7 Days</span>
          <span>Clean Eating Plan</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5" />
          <span>Location</span>
        </div>

        <p className="text-gray-600 mb-4">
          A little bit nutty and a whole lot noice, this healthy spin on the 
          takeout classic stars chicken and veg in a sweet and savoury 
          stir-fry sauce. Based on what you've told us, We've customised a 
          clean eating meal plan.
        </p>

        <div className="flex gap-4 mb-4">
          <span>Vegetarian</span>
          <span>Low-caloric</span>
          <span>7 days plan</span>
          <span>Detoxing</span>
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Lunch + Dinner</button>
          <button className="px-4 py-2 bg-green-100 rounded">All Meals</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Lunch + Snacks</button>
        </div>
      </div>
    </div>
  );
};

const MealPlan = () => {
    const meals = [
      { name: 'Breakfast', image: '/images/17th.jpg' },
      { name: 'Lunch', image: '/images/18th.jpg' },
      { name: 'Evening meal', image: '/images/14th.jpg' },
      { name: 'Dinner', image: '/images/15th.jpg' }
    ];
    
    return (
      <div className="mt-8">
        <h3 className="text-lg mb-4">Your Cart</h3>
        <div className="grid grid-cols-4 gap-4">
          {meals.map((meal) => (
            <Card key={meal.name}>
              <CardContent className="p-4">
                <img 
                  src={meal.image} 
                  alt={meal.name}
                  className="w-32 h-24 object-cover rounded-lg mb-2"
                />
                <h4 className="text-sm font-medium">{meal.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
const RestaurantFoodPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center px-6 py-4 bg-white shadow-sm">
        {/* Logo and Navigation Links */}
        <div className="flex items-center w-full justify-start space-x-8">
          <h1 className="text-xl font-bold flex items-center">
            <Leaf className="h-6 w-6 text-green-500 mr-2" /> {/* Leaf icon before Meal */}
            <span>Meal</span>
            <span className="text-green-500">Connect</span> {/* Removed the margin to have no space between Meal and Connect */}
          </h1>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/Delivery-Page" className="hover:text-gray-600">Delivery</Link>
            <Link to="/about" className="hover:text-gray-600">About</Link>
            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
          </div>
        </div>
     
      
        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="ml-2 text-gray-700">Your Cart (0)</span>
          </div>
          <User className="h-5 w-5 text-gray-600" />
          <Search className="h-5 w-5 text-gray-600" />
          <Bell className="h-5 w-5 text-gray-600" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-500">Surplus Foods</span>
          <SearchSort placeholder="Search Restaurants" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="text-2xl text-green-500 mb-4">Your Restaurant Name</h2>
            <RestaurantDetails />
            <MealPlan />
          </div>

          <div>
            <h3 className="text-xl text-green-500 mb-4">List of Restaurant</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item}>
                  <CardContent className="p-4 flex gap-4">
                    <img 
                      src="/images/13th.jpg" 
                      alt="Restaurant"
                      className="w-24 h-24 rounded-lg"
                    />
                    <div>
                      <h4 className="font-medium">Name of restaurant</h4>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Location</span>
                      </div>
                      <div className="flex gap-2 text-sm">
                        <span>28 Meals</span>
                        <span>7 Days</span>
                      </div>
                      <button className="text-green-500 text-sm">Add Cart</button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFoodPage;