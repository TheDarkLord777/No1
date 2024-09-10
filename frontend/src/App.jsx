import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./components/Header/Header.jsx";
import "./i18n/config.js"
import styled from "styled-components";
import Content from "./components/Content/Content.jsx";

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
    <Container >
      <Header />
      <Inside>
      <Content/>
        </Inside>
      </Container>
  );
}

const Container=styled.div`
height: calc(100vh - 20px);
    width: calc(100% - 20px);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      height: calc(100vh - 10px);
      width: calc(100% - 10px);
    }
`;
const Inside = styled.div`
  flex-grow: 1;
  background: url("/assets/background.gif") no-repeat;
  background-position: center;
  background-size: cover;
`;

export default App;
