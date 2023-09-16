// StudentLogin.js
import React, { useState } from 'react';

const StudentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock authentication logic for students
    if (username === 'student' && password === 'password') {
      // Redirect to the student dashboard
      window.location.href = '/student-dashboard';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default StudentLogin;
