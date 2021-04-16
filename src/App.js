//import statements
import{ useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
//changing for ant
import './app.less';
import AddMedpage from './pages/AddMedpage'
import Medicationlookpage from './pages/Medicationlookpage'
import Home from './pages/Home'
import Medlistpage from './pages/Medlistpage'
import{ login, logout } from './services/firebase'
import {Layout, Menu, Breadcrumb } from 'antd'
// const {Header, Footer, Content} = Layout;
import TopBar from './components/Header/Header'




function App() {

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
  const[user, setUser] = useState({
    displayName: '',
    photoUrl: ''
  })
  return(
    
    <>
      <Route  user = {user} exact path="/" render={(props)=>
        <Home></Home>
      }></Route>
      <Route exact path='/meds' render={(props)=>
      <Medicationlookpage event={props.event}/>
      }></Route>
      <Route exact path="/addison" render={(props)=>
      <AddMedpage />
      }
      ></Route>
     </>
  )

     }

  

export default App;
