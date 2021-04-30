
//changing for ant
import {useState} from 'react'
import Header from '../components/Header/Header'
import AddForm from '../components/Add/Add'
import AddCal from '../components/AddCal/AddCal';
import {Breadcrumb} from 'antd'
import { HashLink as LinkH } from 'react-router-hash-link';
  
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