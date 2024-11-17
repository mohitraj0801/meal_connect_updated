import React from 'react';
import { MapPin } from 'lucide-react';
import { SearchSort } from '../components/common/SearchSort';
import { Card, CardContent } from '../components/ui/card';


const RestaurantDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <img 
          src="/api/placeholder/400/300" 
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
  const meals = ['Breakfast', 'Lunch', 'Evening meal', 'Dinner'];
  
  return (
    <div className="mt-8">
      <h3 className="text-lg mb-4">Your Cart</h3>
      <div className="grid grid-cols-4 gap-4">
        {meals.map((meal) => (
          <Card key={meal}>
            <CardContent className="p-4">
              <img 
                src="/api/placeholder/200/150" 
                alt={meal}
                className="w-full rounded-lg mb-2"
              />
              <h4 className="text-sm font-medium">{meal}</h4>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const RestaurantFoodPage = () => {
  return (
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
                    src="/api/placeholder/100/100" 
                    alt="Restaurant"
                    className="rounded-lg"
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
  );
};

export default RestaurantFoodPage;
