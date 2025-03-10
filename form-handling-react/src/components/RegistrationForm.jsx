import { useState } from 'react';

function RegistrationForm() {
  // State for each form field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Basic validation
    if (!username) validationErrors.username = "Username is required.";
    if (!email) validationErrors.email = "Email is required.";
    if (!password) validationErrors.password = "Password is required.";

    setErrors(validationErrors);

    // If no errors, you can submit the form data to an API here
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully');
      console.log({ username, email, password });
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
