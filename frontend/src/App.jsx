import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./components/Header/Header.jsx";

function App() {
  const [data, setData] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/api`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then(response => {
        console.log('Full response:', response); // Log the entire response object
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error making the request:', error);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="inside">
        <div>{data ? data : "Loading.."}</div>
      </div>
    </div>
  );
}

export default App;
