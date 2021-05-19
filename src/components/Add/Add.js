import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'
import {auth} from 'firebase/firebase'
import Medlist from '../../components/Medlist/Medlist'



function AddForm(props){

  const[state, setState] = useState({
    user: null, 
    meds: [{
      name: 'adderall',
      dose: '30mg',
      dateFill: '10-05-2021',
      morning: 'yes',
      afternoon: 'yes',
      night: 'no',

    }],
    //add new med to the list 
    newMed: {
      name: '',
      dose: '',
      dateFill: '',
      morning:'',
      afternoon:'',
      night:'',
    },
  });

  const[event, setEvent] = useState({
    event:[{
      summary: '',
      start: {
        dateTime: '2021-06-28T09:00:00-07:00',
        timeZone: 'America/Los_Angeles'
      },
      recurrence: [
        'RRULE:FREQ=DAILY'
      ],
      reminders: {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10}
        ]
      }

    }]
  })



  
    async function getAppData(){
        const BASE_URL = 'https://mindfulmedbe.herokuapp.com/api/meds'
        const meds = await fetch(BASE_URL).then((res) => res.json());
        setState((prevState) => ({
          //sets state to all data entered remembers previous
          //sperad opperator
          ...prevState,
          meds,
        }));
      }
    //use effect function 
    useEffect(() => {
      getAppData();
    },[]);
    
     //add new medication to list
     // e for event
     async function addMed(e){
       e.preventDefault();
       const BASE_URL = "https://mindfulmedbe.herokuapp.com/api/meds";
      
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
          morning:'',
          afternoon:'',
          night:'',
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
 
        
    return(
        <>
 
    <form onSubmit={addMed}>
    <label>medication name: </label>
    <input name="name" 
    input={state.newMed.name} 
    onChange={handleChange}
    />
      <label>dose:</label>
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
    default='no'>
       <option></option>
     <option value="yes">Yes</option>
      <option value='no'>No</option>
  </select>
    <label>take in the afternoon? </label>
    <select name="afternoon"
    input={state.newMed.afternoon} 
    onChange={handleChange}
    >
       <option></option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
</select>
    <label>take at night? </label>
    <select name="night"
    input={state.newMed.night} 
    onChange={handleChange}
    >
    <option></option>
     <option value="yes">Yes</option>
      <option value="no">No</option>
</select>
    <button>ADD MED</button>
  </form>
  
  <section>
  <Medlist state={state}/>
  </section>
        </>
      
    )
}

export default AddForm;