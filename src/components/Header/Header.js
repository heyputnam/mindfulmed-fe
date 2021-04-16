// import{ login, logout } from '../../services/firebase'
// import './Header.less'
// import { Layout, Menu, Breadcrumb } from 'antd';
// import  {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom'
// import Medlistpage from '../../pages/Medlistpage';
// import AddMedication from '../../pages/AddMedpage';
// const { Header, Content, Footer } = Layout;
// const { SubMenu } = Menu;




// function TopBar(props){ 

//   function handleMenuClick(e){
//     <Route exact path="/addison" render={AddMedication}
//     ></Route>
//   }
   
//   return(
//     <Router>
//   <Header style={{background: '#8eddfc'}}>
//   <div className="logo" />
//   <Menu  style={{background:  '#8eddfc' }}mode="horizontal" defaultSelectedKeys={['2']} selectedKeys={[props.location.pathname]}>
//   <Menu.Item key="1" >
//             Home
//             </Menu.Item>
            
//             <Menu.Item key="2">Add</Menu.Item>
//             <SubMenu key="sub1" title="Meds">
//             <Menu.Item key="7">Morning</Menu.Item>
//               <Menu.Item key="4">Afternnoon</Menu.Item>
//               <Menu.Item key="5">Night</Menu.Item>
//               <Menu.Item key="/addison"><NavLink to="/addison" onClick={handleMenuClick}>All</NavLink></Menu.Item>
//                  </SubMenu>
//             <Menu.Item key="3">Search</Menu.Item>
//             <Menu.Item onClick={login} className="log" key="8">Login</Menu.Item>
//             <Menu.Item onClick={logout} className="log" key="10">Logout</Menu.Item>
            
        
        
        
            
//   </Menu>
// </Header>
// </Router>
//   )
// }

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import{ login, logout } from '../../services/firebase'
const { SubMenu } = Menu

const TopBar = withRouter(props => {
  const { location } = props;
  return (
    <div className="container">
{/* '#8eddfc' */}
    <Menu selectedKeys={[location.pathname]}  style={{background:  '#74bffc' }}mode="horizontal">
      <Menu.Item key="/" class="menu-item" style={{}}>
        <Link to="/">Home </Link>
      </Menu.Item>
      <Menu.Item key="/addison">
        <Link to="/addison">Add</Link>
      </Menu.Item>
      <Menu.Item key="/meds">
        <Link to="/meds">Meds</Link>
      </Menu.Item>
      <Menu.Item onClick={login} key="login" style={{float: 'right'}}>

        Login</Menu.Item>
       <Menu.Item onClick={logout}key="logout" style={{float: 'right'}}>Logout</Menu.Item>
    </Menu>
    </div>
  );
});

export default TopBar;