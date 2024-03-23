import React, { useState } from 'react';
import axios from 'axios';

function GreetUser() {
  const [message, setMessage] = useState('');
  
  async function fetchGreeting(event) {
    event.preventDefault();
    
    try {
      const response = await axios.get('http://localhost:5000/api/greet', {
        params: {
          username: 'John Doe'
        }
      });
      
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <form onSubmit={fetchGreeting}>
      <button type="submit">Greet User</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default GreetUser;