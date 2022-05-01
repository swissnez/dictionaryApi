//jshint esversion:9
import React from 'react';
import "./Header.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import categories from "../../data/category";

const Header = ({setCategory,category,word,setWord,LightTheme}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main:'#fff',
            },
          mode: 'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    };
    
  

    return (
        
        <div className="header">
            <ThemeProvider theme={darkTheme}>
            <span className="title">{word?word:"Word Hunt"}</span>
            <div className="inputs">
                <TextField
                    label={"Search a word"}
                    variant="standard"
                    className="search"
                    onChange={(e) => setWord(e.target.value)}   
                />
                <TextField
                    className="select"
                    select
                    label="Language"
                    value={category}
                    onChange={(e)=>handleChange(e.target.value)} // obtain the current <html> on the page i.e the event target 
                >
                    {
                        categories.map((itemMenu) => (
                            <MenuItem key={itemMenu.label} value={itemMenu.label}>{itemMenu.value}</MenuItem>
                        ))
                    }
                    </TextField>
                </div>
            </ThemeProvider>
        </div>
        
    )
}

export default Header
