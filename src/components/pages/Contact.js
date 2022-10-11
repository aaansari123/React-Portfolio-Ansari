import React, { useState } from 'react';
import '../../assets/style.css'
export default function Contact() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    
    
  };
  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit = {handleFormSubmit}>
        <input
          id = "name"
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange = {event => setName(event.target.value)}
          value = {name}
        />
         <input
          id = "email"
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange = {event => setEmail(event.target.value)}
          value = {email}


        />
         <input
          id = "message"
          type="text"
          placeholder="Enter a message"
          name="message"
          onChange = {event => setMessage(event.target.value)}
          value = {message}


        />
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        
    </div>
  );
}
