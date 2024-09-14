import { useEffect, useState } from "react";
import axios from 'axios';
import "./i18n/config.js"

import Main from "./pages/Main/Main.jsx";

function App() {
  const [data, setData] = useState(null);
  const [myMedia, setMyMedia] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const api = axios.create({
    baseURL: `${API_URL}/api`,
    headers: { 'ngrok-skip-browser-warning': 'true' }
  });
  
  useEffect(() => {
    api.get('')
      .then(response => {
        console.log('Full response:', response);
        setData(response.data?.message || 'Unexpected response format');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setData('Error: Unable to fetch data');
      });
  
    api.get('/media')
      .then(response => {
        console.log('Media response:', response);
        setMyMedia(response.data?.url || 'Unexpected media response format');
      })
      .catch(error => {
        console.error('Error fetching media:', error);
        setMyMedia('Error: Unable to fetch media');
      });
  }, []);


  return (
    <Main/>
  );
}



export default App;
