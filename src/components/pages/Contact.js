import React from 'react';
import '../../assets/style.css'
export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form >
        <input
          type="text"
          placeholder="Enter your name"
          name="text"


        ></input>
         <input
          type="text"
          placeholder="Enter your email"
          name="text"


        ></input>
         <input
          type="text"
          placeholder="Enter a message"
          name="text"


        ></input>
        </form>
    </div>
  );
}
