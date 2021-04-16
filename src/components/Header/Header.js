import{ login, logout } from '../../services/firebase'
import './Header.less'
import { Layout, Menu, Breadcrumb } from 'antd';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;



const TopBar = (props) => {
  return(
  <Header style={{background: '#8eddfc'}}>
  <div className="logo" />
  <Menu  style={{background:  '#8eddfc' }}mode="horizontal" defaultSelectedKeys={['2']}>
  <Menu.Item key="1" >
            Home
            </Menu.Item>
            
            <Menu.Item key="2">Add</Menu.Item>
            <SubMenu key="sub1" title="Meds">
            <Menu.Item key="7">Morning</Menu.Item>
              <Menu.Item key="4">Afternnoon</Menu.Item>
              <Menu.Item key="5">Night</Menu.Item>
              <Menu.Item key="6">All</Menu.Item>
    </SubMenu>
            <Menu.Item key="3">Search</Menu.Item>
            <Menu.Item onClick={login} className="log" key="8">Login</Menu.Item>
            <Menu.Item onClick={logout} className="log" key="8">Logout</Menu.Item>
            <Menu.Item disabled="true"> {props.user.displayName}</Menu.Item>
                <p><img src={props.user.photoURL} ></img></p>
          
            
  </Menu>
</Header>
  )
}

export default TopBar;