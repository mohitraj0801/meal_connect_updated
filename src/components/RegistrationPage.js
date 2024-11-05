import React, { useState } from 'react';

const RegistrationPage = () => {
  const [userType, setUserType] = useState('restaurant');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and user registration
    console.log('Registering user:', { userType, name, address, email, password });
  };

  return (
    <div>
      <h1>Register Now As</h1>
      <div>
        <button onClick={() => setUserType('restaurant')}>Restaurant</button>
        <button onClick={() => setUserType('foodBank')}>Food Bank</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Restaurant / Food Bank Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;