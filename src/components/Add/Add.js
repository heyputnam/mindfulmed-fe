import { useEffect } from 'react'
import Medlist from '../../components/Medlist/Medlist'
import AutoSuggest from '../../components/AutoSuggest/AutoSuggest'
import GoogleCal from '../../components/GoogleCal/GoogleCal'
import Fda from '../../components/Fda/Fda'
import Morning from "../../components/Lists/Morning/Morning"
import Afternoon from "../../components/Lists/Afternoon/Afternoon"
import Night from "../../components/Lists/Night/Night"
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'
import {auth} from 'firebase/firebase'

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

function AddForm(props){
    async function getAppData(){
        const BASE_URL = "http://localhost:3001/api/meds"
        const meds = await fetch(BASE_URL).then((res) => res.json());
        props.setState(prevState => ({
          //sets state to all data entered remembers previous
          //sperad opperator
          ...prevState,
          meds,
        }));
      }
    //use effect function 
    useEffect(() => {
      getAppData();
      firebase.auth().onAuthStateChanged(user => {
        if(props.user) {
          props.state.setState(prevState => ({
            ...prevState,
            user,
          }));
        } else {
        //   props.state.setState(prevState => ({
        //     ...prevState,
        //     user: null
        //   }))
        }
      })
    }, []);
    
     //add new medication to list
     // e for event
     async function addMed(e){
       if(!props.state.user) return;
       e.preventDefault();
       const BASE_URL = "http://localhost:3001/api/meds";
       const med = await fetch(BASE_URL, {
         method: "POST",
         headers: {
           "Content-type": "Application/json"
         },
         body: JSON.stringify(props.state.newMed),
       }).then((res)=> res.json());
       // do this so it doesnt wipe the user when we add new state to the page 
       props.setState((prevState) => ({
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
      props.setState((prevState) => ({
        ...prevState,
        newMed: {
          ...prevState.newMed,
          [e.target.name]: e.target.value,
      }
      }))
    }
        console.log(props.state)
    return(
        <>
    <form onSubmit={addMed}>
    <label>medication name: </label>
    <input name="name" 
    input={props.state.newMed.name} 
    onChange={handleChange}
    />
      <label>dose: </label>
    <input name="dose" 
    input={props.newMed.dose} 
    onChange={handleChange}
    />
      <label> Date Filled: </label>
    <input name="dateFill" 
    input={props.state.newMed.dateFill} 
    onChange={handleChange}
    type="date"
    />
      <label>take in morning? </label>
      <select name="morning"
    input={props.state.newMed.morning} 
    onChange={handleChange}
    type="Booleam" default='false'>
       <option></option>
     <option value="true">Yes</option>
      <option value='false'>No</option>
  </select>
    <label>take in the afternoon? </label>
    <select name="afternoon"
    input={props.state.newMed.afternoon} 
    onChange={handleChange}
    type="Booleam">
       <option></option>
      <option value="true">Yes</option>
      <option value="false">No</option>
</select>
    <label>take at night? </label>
    <select name="night"
    input={props.state.newMed.night} 
    onChange={handleChange}
    type="Booleam">
    <option></option>
     <option value="true">Yes</option>
      <option value="false">No</option>
</select>
    <button>ADD MED</button>
  </form>
        </>
    )
}

export default AddForm;