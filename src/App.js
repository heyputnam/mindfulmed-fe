//import statements
import{ useState } from 'react';
import {
  Route,
} from "react-router-dom";
//changing for ant
import './app.less';
import AddMedpage from './pages/AddMedpage'
import Medslistpage from './pages/Medlistpage'
import Home from './pages/Home'




function App() {
  const[state, setState] = useState({
    med: [{
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
      <Medslistpage />
      }></Route>
      <Route exact path="/addison" render={(props)=>
      <AddMedpage state={state} setState={setState} event={event}/>
      }
      ></Route>
     </>
  )

     }

  

export default App;
