//import statements
import{ useState, } from 'react';
import {
  Route
} from "react-router-dom";
//changing for ant
import './app.less';
import AddMedpage from './pages/AddMedpage'
import Home from './pages/Home'






function App() {




  const[user, setUser] = useState({
    displayName: '',
    photoUrl: ''
  })
  return(
    
    <>
      <Route  user = {user} exact path="/" render={(props)=>
        <Home></Home>
      }></Route>
      <Route exact path="/medication" render={(props)=>
      <AddMedpage  />
      }
      ></Route>
     </>
  )

     }

  

export default App;
