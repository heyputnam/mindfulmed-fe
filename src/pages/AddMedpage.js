
import{ useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Link,

} from "react-router-dom";
//changing for ant
import Header from '../components/Header/Header'
import Medlist from '../components/Medlist/Medlist'
import AutoSuggest from '../components/AutoSuggest/AutoSuggest'
import Fda from '../components/Fda/Fda'
import Morning from "../components/Lists/Morning/Morning"
import Afternoon from "../components/Lists/Afternoon/Afternoon"
import Night from "../components/Lists/Night/Night"
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'
import {auth} from 'firebase/firebase'
import Medlistpage from '../pages/Medlistpage'
import Home from '../pages/Home'
import Medicationlookpage from '../pages/Medicationlookpage'
import AddForm from '../components/Add/Add'
import AddCal from '../components/AddCal/AddCal';
import {Breadcrumb} from 'antd'
import { HashLink as LinkH } from 'react-router-hash-link';
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
} from 'antd';
import MedList from '../components/Medlist/Medlist';
  function medPage(props){
  return(
    <div>
  <Header/>
   <Breadcrumb>
      <Breadcrumb.Item>
       <LinkH to="#section-one">Add</LinkH>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
       <LinkH to="#section-calendear">Add Cal</LinkH>
    </Breadcrumb.Item>
  
    <Breadcrumb.Item>
       <LinkH to="#section-two">Morning</LinkH>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
       <LinkH to="#section-three">Afternoon</LinkH>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
       <LinkH to="#section-four">Night</LinkH>
    </Breadcrumb.Item>
  </Breadcrumb>
        <div id="section-one" className="section-one">
      <AddForm state={props.state} setState={props.setState}/>
        </div>
        <div id="section-calendar">
        <h1>Add To Calendar</h1>
        <AddCal event={props.event}/>
        </div>
        <div id="section-two">
          <h1>Medication List</h1>
    {/* <MedList state={props.state} meds={props.state.meds}/> */}
          {/* <Morning /> */}
        </div>
        <div id="section-three">
          <p>3</p>
        </div>  <div id="section-four">
          <p>
            four
          </p>
        </div>

       
</div>
  );

  }

export default medPage;