

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import{ login, logout } from '../../services/firebase'

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