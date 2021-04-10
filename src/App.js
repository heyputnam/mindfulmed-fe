//import statements
import{ useState, useEffect } from 'react';
import './styles.css';
import Header from './components/Header/Header'
import Medlist from './components/Medlist/Medlist'
import AutoSuggest from './components/AutoSuggest/AutoSuggest'
import {login, logout, auth } from './services/firebase'
import autoSuggestdb from './services/autoSuggest-api'

function App() {
  //setting state and state function
  const[state, setState] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
    user: null, 
    meds: [{
      name: 'adderall',
      dose: '30mg',
      dateFill: '10-05-2021',
      morning: 'true',
      afternoon: true,
      night: false,

    }],
    //add new med to the list 
    newMed: {
      name: '',
      dose: '',
      dateFill: '',
      morning:Boolean(''),
      afternoon:Boolean(''),
      night: Boolean(''),
    },
  });
  //create a function to get app data from backend app
  const[auto, setAuto] = useState({


  })



  async function getAppData(){
    const BASE_URL = "http://localhost:3001/api/meds"
    const meds = await fetch(BASE_URL).then((res) => res.json());
    setState(prevState => ({
      //sets state to all data entered remembers previous
      //sperad opperator
      ...prevState,
      meds,
    }));
  }
//use effect function 
useEffect(() => {
  getAppData();
  auth.onAuthStateChanged(user => {
    if(user) {
      setState(prevState => ({
        ...prevState,
        user,
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        user: null
      }))
    }
  })
}, []);

 //add new medication to list
 // e for event
 async function addMed(e){
   if(!state.user) return;
   e.preventDefault();
   const BASE_URL = "http://localhost:3001/api/meds";
   const med = await fetch(BASE_URL, {
     method: "POST",
     headers: {
       "Content-type": "Application/json"
     },
     body: JSON.stringify(state.newMed),
   }).then((res)=> res.json());
   // do this so it doesnt wipe the user when we add new state to the page 
   setState((prevState) => ({
     ...prevState,
     meds: [...prevState.meds, prevState.newMed], 
     newMed: {
      name: '',
      dose: '',
      dateFill: '',
      morning:Boolean(''),
      afternoon:Boolean(''),
      night: Boolean(''),
    },
   }))
 }
 //handel change funcxtion 
 function handleChange(e){
  setState((prevState) => ({
    ...prevState,
    newMed: {
      ...prevState.newMed,
      [e.target.name]: e.target.value,
  }
  }))
 }

  return (
    <div>
      <header>
        <Header user={state.user}/>
      </header>
      <section>
      <Medlist state={state}/>
      </section>
      <div>
        <AutoSuggest options={[autoSuggestdb]}/>
      </div>
      <form onSubmit={addMed}>
        <label>medication name: </label>
        <input name="name" 
        input={state.newMed.name} 
        onChange={handleChange}
        />
          <label>dose: </label>
        <input name="dose" 
        input={state.newMed.dose} 
        onChange={handleChange}
        />
          <label> Date Filled: </label>
        <input name="dateFill" 
        input={state.newMed.dateFill} 
        onChange={handleChange}
        type="date"
        />
          <label>take in morning? </label>
          <select name="morning"
        input={state.newMed.morning} 
        onChange={handleChange}
        type="Booleam" default='false'>
           <option></option>
         <option value="true">Yes</option>
          <option value='false'>No</option>
      </select>
        <label>take in the afternoon? </label>
        <select name="afternoon"
        input={state.newMed.afternoon} 
        onChange={handleChange}
        type="Booleam">
           <option></option>
          <option value="true">Yes</option>
          <option value="false">No</option>
    </select>
        <label>take at night? </label>
        <select name="night"
        input={state.newMed.night} 
        onChange={handleChange}
        type="Booleam">
        <option></option>
         <option value="true">Yes</option>
          <option value="false">No</option>
   </select>
        <button>ADD MED</button>
      </form>
    </div>
  );
  
}

export default App;
