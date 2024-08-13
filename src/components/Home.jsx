import React, { useEffect, useState } from 'react'

function Home() {
  const apiUrl = "https://you904.vercel.app/api";
  
  const [mess, setMess] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/endpoint`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMess(data); // Set the message from the backend
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once
  return (
    <>
    {
mess.map((doc)=>(
  <div>
<h1>{doc.name}'s price = {doc.price}</h1>

  </div>
))
    }
    </>
  )
}

export default Home