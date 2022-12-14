import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from '@mui/material/Button';
import axios from "axios";

const options = [
  [0, "Never/ Seldom"],
  [1, "Occasionally"],
  [2, "Often, quite a bit"],
  [3, "Very often, very frequently"],
];

function App() {
  return (
    <div className="App">
      <Container fixed>
        
      </Container>
    </div>
  );
}

export default App;

