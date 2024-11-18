import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const MealConnectApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('date-wise');
  const [showDashboardSubmenu, setShowDashboardSubmenu] = useState(true);

  // Navigation items with submenu
  const dashboardItems = [
    { id: 'date-wise', label: 'Date Wise Donation Tracking' },
    { id: 'restaurant', label: 'Restaurant Donation Details' },
    { id: 'quantity', label: 'Quantity Metrics' },
    { id: 'food-item', label: 'Food Item Categorization' },
    { id: 'daily', label: 'Daily Donation Summaries' },
    { id: 'cumulative', label: 'Cumulative Donation Statistics' }
  ];

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'date-wise':
        return (
          <div className="p-6">
            <h2 className="text-xl font-medium mb-6">Date Wise Donation Tracking</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left border-r">Date</th>
                    <th className="p-4 text-left border-r">Restaurant</th>
                    <th className="p-4 text-left border-r">Food Item</th>
                    <th className="p-4 text-left border-r">Quantity</th>
                    <th className="p-4 text-left border-r">Category</th>
                    <th className="p-4 text-left">Exp. Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'restaurant':
        return (
          <div className="p-6">
            <h2 className="text-xl font-medium mb-6">Restaurant Donation Details</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left border-r">Restaurant</th>
                    <th className="p-4 text-left border-r">Contact</th>
                    <th className="p-4 text-left border-r">Location</th>
                    <th className="p-4 text-left border-r">Donation frequency</th>
                    <th className="p-4 text-left">Avg Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'quantity':
        return (
          <div className="p-6">
            <h2 className="text-xl font-medium mb-6">Quantity Metrics</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left border-r">Food Item</th>
                    <th className="p-4 text-left border-r">Total Donated</th>
                    <th className="p-4 text-left border-r">Total Distributed</th>
                    <th className="p-4 text-left">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'food-item':
        return (
          <div className="p-6">
            <h2 className="text-xl font-medium mb-6">Food Item Categorization</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left border-r">Category</th>
                    <th className="p-4 text-left border-r">Items</th>
                    <th className="p-4 text-left">Total Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'daily':
        return (
          <div className="p-6">
            <h2 className="text-xl font-medium mb-6">Daily Donation Summaries</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left border-r">Date</th>
                    <th className="p-4 text-left border-r">Total Quantity Donated</th>
                    <th className="p-4 text-left border-r">Top Donors</th>
                    <th className="p-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
        case 'cumulative':
        return (
          <div className="p-6">
            <h2 className="text-xl font-medium mb-6">Cumulative Donation Statistics</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left border-r">Total Donations</th>
                    <th className="p-4 text-left border-r">Total Distributed</th>
                    <th className="p-4 text-left border-r">Total Donors</th>
                    <th className="p-4 text-left">Total Beneficiaries</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4 border-r"></td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-teal-300 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-teal-400 rounded">
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <span className="font-semibold text-black">Meal</span>
            <span className="font-semibold text-teal-600">Connect</span>
          </div>
        </div>
        <nav className="flex items-center gap-6">
        <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/Delivery-Page" className="hover:text-gray-600">Delivery</Link>
          <Link to="/about" className="hover:text-gray-600">About</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Your Cart (0)</span>
          </div>
          <button className="p-2 rounded-full hover:bg-teal-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-teal-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`bg-gray-100 w-64 min-h-screen transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="p-4">
            <div className="space-y-2">
              {/* Dashboard with submenu */}
              <div>
                <button
                  onClick={() => setShowDashboardSubmenu(!showDashboardSubmenu)}
                  className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-200 rounded"
                >
                  <span className="font-medium">Dashboard</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${showDashboardSubmenu ? 'rotate-180' : ''}`} />
                </button>
                {showDashboardSubmenu && (
                  <div className="ml-4 space-y-1">
                    {dashboardItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        className={`w-full p-2 text-left text-sm hover:bg-gray-200 rounded ${currentPage === item.id ? 'bg-gray-200' : ''}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Restaurant */}
              <button className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-200 rounded">
                <span className="font-medium">Restaurant</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Food Banks */}
              <button className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-200 rounded">
                <span className="font-medium">Food Banks</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-white">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
};

export default MealConnectApp;