import React,{useState} from 'react'

function Form() {
    const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    try {
      const response = await fetch('https://you904.vercel.app/api/sendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputValue }),
      });

      const result = await response.json();
      console.log(result.message); // Display response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter something"
        />
        <button type="submit">Send to Server</button>
      </form>
    </div>
  )
}

export default Form