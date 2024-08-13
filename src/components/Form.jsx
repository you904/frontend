import React,{useState} from 'react'

function Form() {
    const [inputname, setInputName] = useState("");
    const [inputPrice, setInputPrice] = useState("");

  const handleSubmit = async (e) => {
    const data = {name:inputname,
        price:inputPrice
    }
    try {
      const response = await fetch('https://you904.vercel.app/api/sendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:inputname,
            price:inputPrice
        }),
      });

      const result = await response.json();
      console.log(result.message); // Display response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
        <input
          type="text"
          value={inputname}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Enter name of product"
        />
        <input
          type="text"
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
          placeholder="Enter price of product"
        />
        <button onClick={handleSubmit}>Send to Server</button>
      
    </div>
  )
}

export default Form