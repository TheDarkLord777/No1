import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";


function App() {
const [data,setData]=useState(null)
const API_URL = process.env.API_URL;
console.log(API_URL)

useEffect(()=>{
  fetch(`${API_URL}/api`).then(response=>response.json()).then(response=>setData(response.message))
},[])

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
