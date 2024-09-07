import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./components/Header/Header.jsx";
import "./i18n/config.js"
import styled from "styled-components";

function App() {
  const [data, setData] = useState(null);
  const [myMedia, setMyMedia] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/api`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then(response => {
        console.log('Full response:', response); // Log the entire response object
        if (response.data && response.data.message) {
          setData(response.data.message);
        } else {
          console.error('Unexpected response format:', response.data);
          setData('Error: Unexpected response format');
        }
      })
      .catch(error => {
        console.error('There was an error making the request:', error);
        setData('Error: Unable to fetch data');
      });

    // Media faylni olish
    axios.get(`${API_URL}/api/media`, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then(response => {
        console.log('Media response:', response); // Log the media response
        if (response.data && response.data.url) {
          setMyMedia(response.data.url);
        } else {
          console.error('Unexpected media response format:', response.data);
          setMyMedia('Error: Unexpected media response format');
        }
      })
      .catch(error => {
        console.error('There was an error making the media request:', error);
        setMyMedia('Error: Unable to fetch media');
      });
  }, []);

  return (
    <Container >
      <Header />
      <Inside>
      <video src={myMedia} width="100%" height="100%" loop autoPlay controls>
      Your browser does not support the video tag.
      </video>
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
`;
const Inside = styled.div`
  flex-grow: 1;
  background: url("https://hi-techmedia.ru/assets/template/img/icon_marketplaces.png") no-repeat;
  background-position: center;
  background-size: contain;
`;

export default App;
