import { useEffect, useState } from 'react'
import Medlist from '../../components/Medlist/Medlist'
import AutoSuggest from '../../components/AutoSuggest/AutoSuggest'
import Fda from '../../components/Fda/Fda'
import Morning from "../../components/Lists/Morning/Morning"
import Afternoon from "../../components/Lists/Afternoon/Afternoon"
import Night from "../../components/Lists/Night/Night"
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'
import {auth} from 'firebase/firebase'
import AddCal from '../AddCal/AddCal'
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

  //  //handel change funcxtion 
 function handleChange(e){
  props.setState((prevState) => ({
    ...prevState,
    newMed: {
      ...prevState.newMed,
      [e.target.name]: e.target.value,
  }
  }))
}

//use effect function 
useEffect((props) => {
  getAppData();
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      props.setState(prevState => ({
        ...prevState,
        user,
      }));
    } else {
      props.setState(prevState => ({
        ...prevState,
        user: null
      }))
    }
  })
}, []);
  
     //add new medication to list
     // e for event
     async function addMed(e){
       console.log('text')
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
            dateFill: Date,
            morning:Boolean(''),
            afternoon:Boolean(''),
            night: Boolean(''),
          },
         }))
       }
    
      
     console.log()
    //  //handel change funcxtion 
 
    return(
      <div>
    <Form 
    labelCol={{
        span: 4,
    }}
    wrapperCol={{
        span: 6,
    }}
    layout="horizontal"
    initialValues={{
        size: 'default',
    }}
    // onValueChange={onFormLayoutChange}
    size='default'
    >
    <Form.Item label="Medication Name:">
         <Input 
         name="name"
         input={props.state.newMed.name}
         onChange={handleChange}/>
    </Form.Item>
    <Form.Item label="Dose:">
         <Input 
         name="dose"
         input={props.state.newMed.dose}
         onChange={handleChange}/>
    </Form.Item>

    <Form.Item label="Date Filled">
         <Input 
         name="dateFill"
         input={props.state.newMed.dateFill}
         onChange={handleChange}
         type='date'/>
    </Form.Item>
    <Form.Item label="Select">
          <Select
          name="morning"
          input={props.state.newMed.morning}
          onClick={handleChange}
          type="boolean">
            <Select.Option value="true">Yes</Select.Option>
            <Select.Option value="false">no</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select">
          <Select
          name="afternoon"
          input={props.state.newMed.afternoon}
          onClick={handleChange}
          type="boolean">
            <Select.Option value="true">Yes</Select.Option>
            <Select.Option value="false">no</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select">
          <Select
          name="night"
          input={props.state.newMed.night}
          onClick={handleChange}
          type="boolean">
            <Select.Option value="true">Yes</Select.Option>
            <Select.Option value="false">no</Select.Option>
          </Select>
        </Form.Item>
        <Button onClick={addMed} name="name">Submit</Button>
  </Form>
        </div>
   
    )
    
}




export default AddForm;

