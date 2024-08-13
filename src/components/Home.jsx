import React, { useState } from 'react'

function Home() {
  const apiUrl = "https://you904.vercel.app/api";
const [mess ,setMess]= useState('')
fetch(`${apiUrl}/endpoint`)
  .then(response => response.json())
  .then(data => {
    setMess(data.message); // Set the message from the backend
    console.log(data);
  })
  .catch(error => console.error('Error:', error));

  return (
    <div>home {mess}</div>
  )
}

export default Home