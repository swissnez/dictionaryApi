//jshint esversion:9
import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import Switch from '@mui/material/Switch';

// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { alpha, styled } from '@mui/material/styles';
// import { grey,pink } from '@mui/material/colors';
 

function App() {



  const [word, setWord] = useState(""); //note add a default such as hello 
  const [meanings,setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightTheme, setLightTheme] = useState(false);

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      // console.log(data.data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);   
    }
  };


  useEffect(() => {
    dictionaryApi(); 
  }, [word,category]);


  
    // const handleChange = () => setLightTheme(!LightTheme);

    
   
  return (
    
    <div className="App" style={{
      height: "100vh",
      backgroundColor: LightTheme ? "#fff" : "#282c34",
      color: LightTheme ? "black" : "white",
      transition: "all 0.5s linear",justifyContent:"space-evenly"
    }}>
      <div style={{position:"absolute",top:0, right:15,paddingTop:10}} className="ThemeToggle">
        <Switch checked={LightTheme} onChange={()=>setLightTheme(!LightTheme)} inputProps={{ 'aria-label': 'controlled' }} />
        <span>{`${LightTheme ? "Dark":"Light"} Mode`}</span>
      </div>
     
      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", heigh: "100vh" }}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} LightTheme={LightTheme} />
        {meanings && <Definitions word={word} meanings={meanings} category={category} LightTheme={LightTheme} />}
      </Container>
    </div>
   
  );
}




export default App;
