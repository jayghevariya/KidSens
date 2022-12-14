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
  const [TellsLiesToHurtOtherPeople, setTellsLiesToHurtOtherPeople] =
    React.useState(-1);
  const [
    Icannotfigureoutwhatmakeshimherhappy,
    setIcannotfigureoutwhatmakeshimherhappy,
  ] = React.useState(-1);
  const [Threatenstohurtothers, setThreatenstohurtothers] = React.useState(-1);
  const [Isconstantlymoving, setIsconstantlymoving] = React.useState(-1);
  const [Hastroublewithreading, setHastroublewithreading] = React.useState(-1);
  const [Isangryandresentful, setIsangryandresentful] = React.useState(-1);
  const [Hasshortattentionspan, setHasshortattentionspan] = React.useState(-1);
  const [Excitable, setExcitable] = React.useState(-1);
  const [Cannotdothingsright, setCannotdothingsright] = React.useState(-1);
  const [HastroubleConcentrating, setHastroubleConcentrating] = React.useState(-1);
  const [Tellthetruth, setTellthetruth] = React.useState(-1);
  const [Hastroubleinorganizing, setHastroubleinorganizing] = React.useState(-1);
  const [Isfuntobearound, setIsfuntobearound] = React.useState(-1);
  const [Inattentive, setInattentive] = React.useState(-1);
  const [Ismessyordisorganized, setIsmessyordisorganized] = React.useState(-1);
  const [SpellingIsPoor, setSpellingIsPoor] = React.useState(-1);
  const [Ispatientandconstant, setIspatientandconstant] = React.useState(-1);
  const [HasnoFriends, setHasnoFriends] = React.useState(-1);
  const [Doesnotunderstand, setDoesnotunderstand] = React.useState(-1);
  const [behaveLikeanangel, setbehaveLikeanangel] = React.useState(-1);
  const [HasTroubleKeppingUp, setHasTroubleKeppingUp] = React.useState(-1);
  const [Hastostruggletocomplete, setHastostruggletocomplete] = React.useState(-1);
  const [Doesnotgetinvited, setDoesnotgetinvited] = React.useState(-1);
  const [Doyouhaveanyotherconcerns, setDoyouhaveanyotherconcerns] = React.useState("");
  const [WhatStrengthsorSkillsdoesyourchildhave, setWhatStrengthsorSkillsdoesyourchildhave] = React.useState("");
  const [ViewALL,setViewALL] = useState(false);
  const [Datas,setDatas] = useState([]);

    async function fetchData() {
      try{
        const data = await axios.get("http://localhost:8000/api/data");
        // console.log("hello");
        console.log(data.data);
        setDatas(data.data);
      }
      catch(err){
        console.log(err);
      }
    }

  useEffect(() => {
    async function fetchData() {
      try{
        const data = await axios.get("http://localhost:8000/api/data");
        // console.log("hello");
        console.log(data.data);
        setDatas(data.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      'one': TellsLiesToHurtOtherPeople,
      'two': Icannotfigureoutwhatmakeshimherhappy,
      'three': Threatenstohurtothers,
      'four': Isconstantlymoving,
      'five': Hastroublewithreading,
      'six': Isangryandresentful,
      'seven': Hasshortattentionspan,
      'eight': Excitable,
      'nine': Cannotdothingsright,
      'ten': HastroubleConcentrating,
      'eleven': Tellthetruth,
      'twelve': Hastroubleinorganizing,
      'thirteen': Isfuntobearound,
      'fourteen': Inattentive,
      'fifteen': Ismessyordisorganized,
      'sixteen': SpellingIsPoor,
      'seventeen': Ispatientandconstant,
      'eighteen': HasnoFriends,
      'nineteen': Doesnotunderstand,
      'twenty': behaveLikeanangel,
      'twentyone': HasTroubleKeppingUp,
      'twentytwo': Hastostruggletocomplete,
      'twentythree': Doesnotgetinvited,
      'twentyfour': Doyouhaveanyotherconcerns,
      'twentyfive': WhatStrengthsorSkillsdoesyourchildhave,
    };
    try {
      console.log(data);
      const res = await axios.post("http://localhost:8000/api/add/",data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  const handleClear = () => {
    setTellsLiesToHurtOtherPeople(-1);
    setIcannotfigureoutwhatmakeshimherhappy(-1);
    setThreatenstohurtothers(-1);
    setIsconstantlymoving(-1);
    setHastroublewithreading(-1);
    setIsangryandresentful(-1);
    setHasshortattentionspan(-1);
    setExcitable(-1);
    setCannotdothingsright(-1);
    setHastroubleConcentrating(-1);
    setTellthetruth(-1);
    setHastroubleinorganizing(-1);
    setIsfuntobearound(-1);
    setInattentive(-1);
    setIsmessyordisorganized(-1);
    setSpellingIsPoor(-1);
    setIspatientandconstant(-1);
    setHasnoFriends(-1);
    setDoesnotunderstand(-1);
    setbehaveLikeanangel(-1);
    setHasTroubleKeppingUp(-1);
    setHastostruggletocomplete(-1);
    setDoesnotgetinvited(-1);
    setDoyouhaveanyotherconcerns("");
    setWhatStrengthsorSkillsdoesyourchildhave("");
  };


  const TellsLiesToHurtOtherPeopleChange = (event) => {
    setTellsLiesToHurtOtherPeople(event.target.value);
  };

  const IcannotfigureoutwhatmakeshimherhappyChange = (event) => {
    setIcannotfigureoutwhatmakeshimherhappy(event.target.value);
  };

  const ThreatenstohurtothersChange = (event) => {
    setThreatenstohurtothers(event.target.value);
  };

  const IsconstantlymovingChange = (event) => {
    setIsconstantlymoving(event.target.value);
  };

  const HastroublewithreadingChange = (event) => {
    setHastroublewithreading(event.target.value);
  };

  const IsangryandresentfulChange = (event) => {
    setIsangryandresentful(event.target.value);
  };

  const HasshortattentionspanChange = (event) => {
    setHasshortattentionspan(event.target.value);
  };

  const ExcitableChange = (event) => {
    setExcitable(event.target.value);
  };

  const CannotdothingsrightChange = (event) => {
    setCannotdothingsright(event.target.value);
  };

  const HastroubleConcentratingChange = (event) => {
    setHastroubleConcentrating(event.target.value);
  };

  const TellthetruthChange = (event) => {
    setTellthetruth(event.target.value);
  };

  const HastroubleinorganizingChange = (event) => {
    setHastroubleinorganizing(event.target.value);
  };

  const IsfuntobearoundChange = (event) => {
    setIsfuntobearound(event.target.value);
  };

  const InattentiveChange = (event) => {
    setInattentive(event.target.value);
  };

  const IsmessyordisorganizedChange = (event) => {
    setIsmessyordisorganized(event.target.value);
  };

  const SpellingIsPoorChange = (event) => {
    setSpellingIsPoor(event.target.value);
  };

  const IspatientandconstantChange = (event) => {
    setIspatientandconstant(event.target.value);
  };

  const HasnoFriendsChange = (event) => {
    setHasnoFriends(event.target.value);
  };

  const DoesnotunderstandChange = (event) => {
    setDoesnotunderstand(event.target.value);
  };

  const behaveLikeanangelChange = (event) => {
    setbehaveLikeanangel(event.target.value);
  };

  const HasTroubleKeppingUpChange = (event) => {
    setHasTroubleKeppingUp(event.target.value);
  };

  const HastostruggletocompleteChange = (event) => {
    setHastostruggletocomplete(event.target.value);
  };

  const DoesnotgetinvitedChange = (event) => {
    setDoesnotgetinvited(event.target.value);
  };

  const DoyouhaveanyotherconcernsChange = (event) => {
    setDoyouhaveanyotherconcerns(event.target.value);
  };

  const WhatStrengthsorSkillsdoesyourchildhaveChange = (event) => {
    setWhatStrengthsorSkillsdoesyourchildhave(event.target.value);
  };


  return (
    <div className="App">
      {/* {console.log(TellsLiesToHurtOtherPeople)}
      {console.log(Icannotfigureoutwhatmakeshimherhappy)}
      {console.log(Threatenstohurtothers)} */}
      {console.log(Datas)}
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100" }}>
          {/* <FormControl fullWidth> */}
          <div className="fullwi">
            <InputLabel id="demo-simple-select-label" className="space1">
              Tells lies to hurt other people
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={TellsLiesToHurtOtherPeople}
              label="Age"
              onChange={TellsLiesToHurtOtherPeopleChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel id="demo-simple-select-label1" className="space1">
              I cannot figure out what makes him/her happy.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label1"
              id="demo-simple-select1"
              value={Icannotfigureoutwhatmakeshimherhappy}
              label="Age"
              onChange={IcannotfigureoutwhatmakeshimherhappyChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label2">
              Threatens to hurt others
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label2"
              id="demo-simple-select"
              value={Threatenstohurtothers}
              label="Age"
              onChange={ThreatenstohurtothersChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label3">
              Is constantly moving
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label3"
              id="demo-simple-select"
              value={Isconstantlymoving}
              label="Age"
              onChange={IsconstantlymovingChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label4">
              Has trouble with reading
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label4"
              id="demo-simple-select"
              value={Hastroublewithreading}
              label="Age"
              onChange={HastroublewithreadingChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label5">
              Is angry and resentful
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label5"
              id="demo-simple-select"
              value={Isangryandresentful}
              label="Age"
              onChange={IsangryandresentfulChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label6">
              Has a short attention span
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label6"
              id="demo-simple-select"
              value={Hasshortattentionspan}
              label="Age"
              onChange={HasshortattentionspanChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label7">
              Excitable, impulsive
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label7"
              id="demo-simple-select"
              value={Excitable}
              label="Age"
              onChange={ExcitableChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label8">
              Cannot do things right.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label8"
              id="demo-simple-select"
              value={Cannotdothingsright}
              label="Age"
              onChange={CannotdothingsrightChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Has trouble concentrating.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={HastroubleConcentrating}
              label="Age"
              onChange={HastroubleConcentratingChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Tells the truth; doesn't even tell "little white lies".
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Tellthetruth}
              label="Age"
              onChange={TellthetruthChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Has trouble in organizing tasks or activities.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Hastroubleinorganizing}
              label="Age"
              onChange={HastroubleinorganizingChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Is fun to be around.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Isfuntobearound}
              label="Age"
              onChange={IsfuntobearoundChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Inattentive, easily distracted.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Inattentive}
              label="Age"
              onChange={InattentiveChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Is messy or disorganized.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Ismessyordisorganized}
              label="Age"
              onChange={IsmessyordisorganizedChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Spelling is poor.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={SpellingIsPoor}
              label="Age"
              onChange={SpellingIsPoorChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Is patient and content, even when waiting in a long line.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Ispatientandconstant}
              label="Age"
              onChange={IspatientandconstantChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Has no friends.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={HasnoFriends}
              label="Age"
              onChange={HasnoFriendsChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Does not understand what he/she reads.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Doesnotunderstand}
              label="Age"
              onChange={DoesnotunderstandChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Behaves like an angel.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={behaveLikeanangel}
              label="Age"
              onChange={behaveLikeanangelChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Has trouble keeping his/her mind on work or on play for long.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={HasTroubleKeppingUp}
              label="Age"
              onChange={HasTroubleKeppingUpChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Has to struggle to complete hard tasks.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Hastostruggletocomplete}
              label="Age"
              onChange={HastostruggletocompleteChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
              Does not get invited to play or go out with others.
            </InputLabel>
            <Select
              className="space"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Doesnotgetinvited}
              label="Age"
              onChange={DoesnotgetinvitedChange}
            >
              {options.map((option) => (
                <MenuItem value={option[0]}>{option[1]}</MenuItem>
              ))}
            </Select>

            <InputLabel className="space1" id="demo-simple-select-label">
            Do you have any other concerns about your child?  
            </InputLabel>

            <div className="space">
            <TextField
              // className="space3"
              style={{ width: "100%" }}
              id="outlined-name"
              // label="Do you have any other concerns about your child?"
              value={Doyouhaveanyotherconcerns}
              onChange={DoyouhaveanyotherconcernsChange}
            />
            </div>

            <InputLabel className="space1" id="demo-simple-select-label">
            What strengths or skills does your child have?
            </InputLabel>

            
            <div className="space">
            <TextField
              // className="space3"
              style={{ width: "100%" }}
              id="outlined-name"
              // label="Do you have any other concerns about your child?"
              value={WhatStrengthsorSkillsdoesyourchildhave}
              onChange={WhatStrengthsorSkillsdoesyourchildhaveChange}
            />
            </div>

            <div className="space" style={{display:"flex" , justifyContent:"space-around" , alignItems: "center" , marginTop:"3%" , paddingBottom:"5%"}}>
              <Button variant="outlined" style={{color:"green" , borderColor:"green"}} onClick={handleSubmit}>Submit</Button>
              <Button variant="outlined" style={{color:"red" , borderColor:"red"}} onClick={handleClear}>Clear Form</Button>
            </div>
            {/* </FormControl> */}
          </div>
        </Box>

        <div style={{textAlign:"center",margin:"4% 0%"}}>
          <Button variant="outlined" style={{color:"blue" , borderColor:"blue"}} onClick={fetchData}>View ALL</Button>
        </div>

        <table style={{'border': '1px solid black','fontSize':'10px'}}>
          <thead>
            <th>Tells lies to hurt other people</th>
            <th>I cannot figure out what makes him/her happy.</th>
            <th>Threatens to hurt others</th>
            <th>Is constantly moving</th>
            <th>Has trouble with reading</th>
            <th>Is angry and resentful</th>
            <th>Has a short attention span</th>
            <th>Excitable, impulsive</th>
            <th>Cannot do things right.</th>
            <th>Has trouble concentrating.</th>
            <th>Tells the truth; doesn't even tell "little white lies".</th>
            <th>Has trouble in organizing tasks or activities.</th>
            <th>Is fun to be around.</th>
            <th>Inattentive, easily distracted.</th>
            <th>Is messy or disorganized.</th>
            <th>Spelling is poor.</th>
            <th>Is patient and content, even when waiting in a long line.</th>
            <th>Has no friends.</th>
            <th>Does not understand what he/she reads.</th>
            <th>Behaves like an angel.</th>
            <th>Has trouble keeping his/her mind on work or on play for long.*</th>
            <th>Has to struggle to complete hard tasks.</th>
            <th>Does not get invited to play or go out with others.</th>
            <th>Do you have any other concerns about your child?</th>
            <th>What strengths or skills does your child have?</th>
          </thead>
          <tbody>
            {Datas.map((item) => (
               <tr>
                    <td>{options[item['one']][1]}</td>
                    <td>{options[item['two']][1]}</td>
                    <td>{options[item['three']][1]}</td>
                    <td>{options[item['four']][1]}</td> 
                    <td>{options[item['five']][1]}</td>
                    <td>{options[item['six']][1]}</td>
                    <td>{options[item['seven']][1]}</td>
                    <td>{options[item['eight']][1]}</td>
                    <td>{options[item['nine']][1]}</td>
                    <td>{options[item['ten']][1]}</td>
                    <td>{options[item['eleven']][1]}</td>
                    <td>{options[item['twelve']][1]}</td>
                    <td>{options[item['thirteen']][1]}</td>
                    <td>{options[item['fourteen']][1]}</td>
                    <td>{options[item['fifteen']][1]}</td>
                    <td>{options[item['sixteen']][1]}</td>
                    <td>{options[item['seventeen']][1]}</td>
                    <td>{options[item['eighteen']][1]}</td>
                    <td>{options[item['nineteen']][1]}</td>
                    <td>{options[item['twenty']][1]}</td>
                    <td>{options[item['twentyone']][1]}</td>
                    <td>{options[item['twentytwo']][1]}</td>
                    <td>{options[item['twentythree']][1]}</td>
                    <td>{item['twentyfour']}</td>
                    <td>{item['twentyfive']}</td>
                </tr>
            
              
              ))}

            
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default App;

