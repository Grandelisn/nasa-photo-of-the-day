import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import "./App.css";
import axios from 'axios';
import Boxes from './Components/Boxes';

function App() {
  const [ nasaPhoto, setNasaPhoto ] = useState([]);
  let test    = new Date().toLocaleDateString("en-US")
  console.log('Test date: ', test);
  useEffect(() =>{
   axios.get('https://api.nasa.gov/planetary/apod?api_key=STdN9oOr47TeHRg3INbqyodC9IYKN9egYtKaGAwC&start_date=2020-01-01&end_date=2020-01-20')
   .then((res) =>{
     setNasaPhoto(res.data);
     
   })
   .catch(err => console.log(err))
 }, [])
  return (
    <div className="App">
      <Boxes boxes = {nasaPhoto}/>
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
