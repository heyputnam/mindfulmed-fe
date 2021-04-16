import Background from '../../images/picturepill.jpg'
import  '../Landing/Landing.less'
import { Layout } from 'antd'
const { Content } = Layout

function Landing(props){
    return(
        <Content style={{padding: '0px'}} className="big">
        <div className="container-image">

        <h1 className="centered">MindfulMed.</h1>
        
        </div>
        </Content>
        
    )
}

export default Landing;