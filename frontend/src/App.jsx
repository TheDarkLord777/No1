import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";


function App() {
const [data,setData]=useState(null)
const API_URL = import.meta.env.VITE_API_URL
console.log(API_URL)

useEffect(() => {
  fetch(`${API_URL}/api`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setData(data.message))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}, []);

  return (
    <div className="container">
  <Header/>
    <div className="inside">
      <div>{data ? data : "Loading.."}</div>
    </div>
    </div>
  )
}

export default App
