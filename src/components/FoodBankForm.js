import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FoodBankForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bankName: '',
    address: '',
    phone: '',
    website: '',
    socialMedia: '',
    daysOfOperation: '',
    openingTimes: '',
    contactName: '',
    contactInfo: '',
    email: '',
    position: '',
    foodItems: '',
    quantityLimits: '',
    storageFacilities: '',
    handlingProtocols: '',
    preferredTime: '',
    contactPerson: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Food Bank form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Food Bank Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-orange-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Food Bank Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                value={formData.bankName}
                onChange={(e) => setFormData({...formData, bankName: e.target.value})}
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              {/* Add more fields as needed */}
            </div>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Contact Person Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Contact Name"
                className="w-full p-2 border rounded"
                value={formData.contactName}
                onChange={(e) => setFormData({...formData, contactName: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {/* Add more fields as needed */}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FoodBankForm;
