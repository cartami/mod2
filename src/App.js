import RecallCards from "./RecallCards";
import { useState, useEffect, useReducer } from "react";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import About from "./About";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        list: [...state.list, action.payload],
      };
    case "remove":
      return {
        list: state.list.filter((num) => num !== action.payload),
      };
    default:
      return state;
  }
}

function App() {
  //const vin = '';
  //JN1AZ34E74M155857 //JN1AZ34E13T015016 // 2C3CDZAG9GH202556
  //initialize to empty array
  const [images, setImages] = useState([]);
  const [recalls, setRecalls] = useState([]);
  const [vinData, setVinData] = useState("1N4BL4CW3KN303101");

  //use async to use await and enable asynchronous, promise-based behavior to be written in a cleaner style,
  //avoiding the need to explicitly configure promise chains.
  const updateImages = async () => {
    try {
      //use axios and custom paramater images
      const images = await axios.get(
        `https://api.carmd.com/v3.0/image?vin=${vinData}`,
        {
          //headers needed for CarMD API authentication Partner Token and Authorization Key

          headers: {
            "Content-Type": "application/json",
            "partner-token": "cbd65aa3193f473f81d2abefb994aad8",
            authorization:
              "Basic N2ZmNDRiNmEtMWMxOS00NzZiLWI4Y2MtYjJjNmFhYzUxNzkz",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      setImages(images.data.data.image); //holds response data
      console.log(images.data.data.image);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const updateRecall = async () => {
    try {
      //use axios and custom paramater images
      const recallData = await axios.get(
        `https://api.carmd.com/v3.0/recall?vin=${vinData}`,
        {
          //headers needed for CarMD API authentication Partner Token and Authorization Key

          headers: {
            "Content-Type": "application/json",
            "partner-token": "cbd65aa3193f473f81d2abefb994aad8",
            authorization:
              "Basic N2ZmNDRiNmEtMWMxOS00NzZiLWI4Y2MtYjJjNmFhYzUxNzkz",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
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

  function Home() {
    return (
      <div className="block">
        <h1 className="text-gray-500 mb-3 pl-3">
          Car Recall Search - Enter car VIN#{" "}
        </h1>
        <header>
        <input className="block mb-2.5 w-auto bg-[#ced7dd] text-[#1b1b1b] 
          rounded-sm border-solid"
          type="text"
          value={vinData}
          placeholder="itemName"
          onChange={(event) => setVinData(event.target.value)}
        />
      </header>
        <section className="p-20 grid sm:grid-cols-1 md:grid-cols-1 gap-3">
          <RecallCards images={images} recalls={recalls} />
        </section>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 relative m-0 font-sans 
    text-2xl text-violet-700 ">
      <Router>
        <nav className="flex flex-row justify-around 
        items-center p-[1%]">
          <Link to="/">Home </Link>
          <Link to="/contact">Contact </Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}



export default App;
