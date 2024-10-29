import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");


  const rot13 = (text: string) => {
    return text.replace(/[A-Za-z]/g, (char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        // Uppercase letters
        return String.fromCharCode(((code - 65 + 13) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // Lowercase letters
        return String.fromCharCode(((code - 97 + 13) % 26) + 97);
      }
      return char;
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInput(newValue);
    setOutput(rot13(newValue));
  };

  return (
  	<>
	  <div style={{ padding: "2rem" }}>
      <h1>ROT13 Encoder</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter text to encode"
        style={{ padding: "0.5rem", fontSize: "1rem", width: "100%" }}
      />
      <h2>Encoded Output</h2>
      <p style={{ padding: "0.5rem", background: "#f0f0f0" }}>{output}</p>
    </div>
    </>
  )
}

export default App
