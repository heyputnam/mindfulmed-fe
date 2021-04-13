//import statements
import{ useState, useEffect } from 'react';
import './styles.css';
import Header from './components/Header/Header'
import Medlist from './components/Medlist/Medlist'
import AutoSuggest from './components/AutoSuggest/AutoSuggest'
import GoogleCal from './components/GoogleCal/GoogleCal'
import {login, logout, auth } from './services/firebase'
import Morning from "./components/Lists/Morning/Morning"
import Afternoon from "./components/Lists/Afternoon/Afternoon"
import Night from "./components/Lists/Night/Night"
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'


function App() {

  //setting state and state function
  const[state, setState] = useState({
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
 // Initialize Firebase

firebase.app(); // if already initialized, use that one

//give access to messaging services in firebase
const messaging = firebase.messaging()
//request permisions to get notifications from the user
messaging.requestPermission()
.then(()=>{
  console.log('permission granted') 
  return messaging.getToken()
})
.then((token)=>{
  console.log(token)
})
.catch((err)=>{
  console.log('error')
})

//if user is on page it will not show background notfication 
//change this to a toast popup 
messaging.onMessage((payload)=>{
  console.log('onMessage: ', payload)
})

  return (
    <div>
      <header>
        <Header user={state.user}/>
      </header>
      <section>
      <GoogleCal />
      <AutoSuggest state={state} />
      </section>
      <section>
      <Medlist state={state}/>
      </section>
      <div>
      <Morning state={state} />
      <Afternoon state={state} />
      <Night state={state} />
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
