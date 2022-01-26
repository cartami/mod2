import RecallCards from "./RecallCards";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function App() {
  //const vin = '';
  //JN1AZ34E74M155857 //JN1AZ34E13T015016 // 2C3CDZAG9GH202556
  //initialize to empty array
  const [images, setImages] = useState([]);
  const [recalls, setRecalls] = useState([]);
  const [vinData, setVinData] = useState('1N4BL4CW3KN303101');

  const handleAddVin = () => {
  };

  //use async to use await and enable asynchronous, promise-based behavior to be written in a cleaner style,
  //avoiding the need to explicitly configure promise chains.
  const updateImages = async () => {
    try {
      //use axios and custom paramater images
      const images = await axios.get(`https://api.carmd.com/v3.0/image?vin=${vinData}`,{
        //headers needed for CarMD API authentication Partner Token and Authorization Key

        headers: {
            'Content-Type': 'application/json',
            'partner-token': 'cbd65aa3193f473f81d2abefb994aad8',
            'authorization': 'Basic N2ZmNDRiNmEtMWMxOS00NzZiLWI4Y2MtYjJjNmFhYzUxNzkz'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
      setImages(images.data.data.image); //holds response data
      console.log(images.data.data.image);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const updateRecall = async () => {
    try {
      //use axios and custom paramater images
      const recallData = await axios.get(`https://api.carmd.com/v3.0/recall?vin=${vinData}`,{
        //headers needed for CarMD API authentication Partner Token and Authorization Key

        headers: {
            'Content-Type': 'application/json',
            'partner-token': 'cbd65aa3193f473f81d2abefb994aad8',
            'authorization': 'Basic N2ZmNDRiNmEtMWMxOS00NzZiLWI4Y2MtYjJjNmFhYzUxNzkz'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    setRecalls(recallData.data.data); //holds response data
      console.log(recallData.data.data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    updateImages();
    updateRecall();
  }, [vinData]); //empty array acts like componentDidMount as in, it only runs once so GET call only once

  return (
    <div className="bg-gray-100">
      <header>
      <h1 className="text-gray-500">Car Recall Search - Enter car information </h1>
      <input
          type="text"
          value={vinData}
          placeholder="itemName"
          onChange={(event) => setVinData(event.target.value)}
        />
    </header>
      <section className="p-20 grid sm:grid-cols-1 md:grid-cols-1 gap-3">
      <RecallCards images={images} recalls={recalls}/>
      </section>
      
    </div>
  );
}

export default App;
